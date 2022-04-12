// react
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// third-party
import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router';
// application
import AccountLayout from '~/components/account/AccountLayout';
import AddressCard from '~/components/shared/AddressCard';
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { accountApi } from '~/api';
import { IOrder } from '~/interfaces/order';
import {
    //Retrieve quote per number
    getQuotesDetailAxios,
    getQuotesDetailListLoader,
    getQuotesByIdAxios
} from '~/store/quotes/quotesActions';
import { quotesState } from '~/store/quotes/quotesHooks';

function Page() {
    const intl = useIntl();
    const dispatch = useDispatch()
    const detailOrder = quotesState();

    const router = useRouter();
    const orderId = parseFloat(typeof router.query.id === 'string' ? router.query.id : '0');
    const [order, setOrder] = useState<IOrder | null>(null);
    useEffect(() => {
        ///  let canceled = false;

        //accountApi?.getOrderById(orderId).then((result) => {
        // if (canceled) {
        //     return;
        // }

        // setOrder(result);
        // });  
        dispatch(getQuotesDetailListLoader());
        setTimeout(() => {
            dispatch(getQuotesDetailAxios(orderId));
            dispatch(getQuotesByIdAxios(orderId));
        }, 200);


        // return () => {
        //   canceled = true;
        // };
    }, [orderId]);

    if (detailOrder.loading) {
        return <FormattedMessage id="LOADING_TEXT" />;
    }

    // console.log(detailOrder.results_list)
    return (
        <React.Fragment>
            <div className="card">
                <PageTitle>{intl.formatMessage({ id: 'TEXT_ORDER_WITH_NUMBER' }, { number: orderId })}</PageTitle>

                <div className="order-header">
                    <div className="order-header__actions">
                        <AppLink href={url.accountOrders()} className="btn btn-xs btn-secondary">
                            <FormattedMessage id="BUTTON_BACK_TO_LIST" />
                        </AppLink>
                    </div>
                    <h5 className="order-header__title">
                        <FormattedMessage id="TEXT_ORDER_WITH_NUMBER" values={{ number: orderId }} />
                    </h5>
                    <div className="order-header__subtitle">
                        <FormattedMessage
                            id="TEXT_ORDER_SUMMARY"
                            values={{
                                date: (
                                    <mark>
                                        <FormattedMessage
                                            id="TEXT_ORDER_SUMMARY_FORMAT_DATE"
                                            values={{ date: Date.parse(detailOrder.results_id?.date) }}
                                        />
                                    </mark>
                                ),
                                status: <mark><FormattedMessage id={`TEXT_ORDER_STATUS_${detailOrder.results_id?.quotation_status.toUpperCase()}`} /></mark>,
                            }}
                        />
                    </div>
                </div>
                <div className="card-divider" />
                <div className="card-table">
                    <div className="table-responsive-sm">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <FormattedMessage id="TABLE_PRODUCT" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="TABLE_TOTAL" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="card-table__body card-table__body--merge-rows">
                                {detailOrder.results_list?.map((item: any, index: any) => (
                                    <tr key={index}>
                                        <td>{`${item.code} × ${parseInt(item.quantity)}`}</td>
                                        <td><CurrencyFormat value={item.total} /></td>
                                    </tr>
                                ))}
                            </tbody>
                            {/**    {detailOrder.totals.length > 0 && (
                                <tbody className="card-table__body card-table__body--merge-rows">
                                    <tr>
                                        <th>
                                            <FormattedMessage id="TABLE_SUBTOTAL" />
                                        </th>
                                        {/**  <td><CurrencyFormat value={order.subtotal} /></td>
                                    </tr>
                                    {detailOrder?.totals.map((total:any, index:any) => (
                                        <tr key={index}>
                                            <th>
                                                <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
                                            </th>
                                            <td><CurrencyFormat value={total.price} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}*/}
                            <tfoot>
                                <tr>
                                    <th>
                                        <FormattedMessage id="TABLE_TOTAL" />
                                    </th>
                                    {/**   <td><CurrencyFormat value={order.total} /></td>*/}
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row mt-3 no-gutters mx-n2">
                <div className="col-sm-6 col-12 px-2">
                    {/** <AddressCard
                        address={order.billingAddress}
                        featured
                        label={<FormattedMessage id="TEXT_BILLING_ADDRESS" />}
                    />*/}
                </div>
                <div className="col-sm-6 col-12 px-2 mt-sm-0 mt-3">
                    {/*++ <AddressCard
                        address={'order.shippingAddress'}
                        featured
                        label={<FormattedMessage id="TEXT_SHIPPING_ADDRESS" />}
                    />**/}
                </div>
            </div>
        </React.Fragment>
    );
}

Page.Layout = AccountLayout;

export default Page;
