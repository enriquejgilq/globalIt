// react
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AccountLayout from '~/components/account/AccountLayout';
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Navigation from '~/components/shared/Navigation';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { accountApi } from '~/api';
import { useList } from '~/services/hooks';
import {
    //List all quotes
    getQuotesAxios,
    getQuotesListLoader
} from '~/store/quotes/quotesActions';
import { quotesState } from '~/store/quotes/quotesHooks';

function Page() {
    const intl = useIntl();
    const dispatch = useDispatch()
    const { list, options, onNavigate } = useList((options) => accountApi.getOrdersList({ limit: 5, ...options }));
    const allQuotes = quotesState();

    useEffect(() => {
        dispatch(getQuotesListLoader())
        setTimeout(() => {
            dispatch(getQuotesAxios())
        }, 1000);
    }, []);

    //console.log(allQuotes)
    return (
        <div className="card">
            <PageTitle>{intl.formatMessage({ id: 'HEADER_ORDER_HISTORY' })}</PageTitle>

            <div className="card-header">
                <h5><FormattedMessage id="HEADER_ORDER_HISTORY" /></h5>
            </div>

            {allQuotes && (
                <React.Fragment>
                    <div className="card-divider" />

                    <div className="card-table">
                        <div className="table-responsive-sm">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <FormattedMessage id="TABLE_NUMBER" />
                                        </th>
                                        <th>
                                            <FormattedMessage id="TABLE_DATE" />
                                        </th>
                                        <th>
                                            <FormattedMessage id="TABLE_STATUS" />
                                        </th>
                                        <th>
                                            <FormattedMessage id="TABLE_TOTAL" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allQuotes.results_all.map((order: any) => (
                                        <tr key={order.id}>
                                            <td>
                                                <AppLink href={url.accountOrderView(order.number)}>
                                                    <FormattedMessage
                                                        id="FORMAT_ORDER_NUMBER"
                                                        values={{ number: order.number }}
                                                    />
                                                </AppLink>
                                            </td>
                                            <td>
                                                <FormattedMessage
                                                    id="FORMAT_DATE_MEDIUM"
                                                    values={{ date: Date.parse(order.date) }}
                                                />
                                            </td>
                                            <td>
                                                <FormattedMessage
                                                    id={`TEXT_ORDER_STATUS_${order.quotation_status.toUpperCase()}`}
                                                />
                                            </td>
                                            <td>
                                                <p> $ {order.total}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card-divider" />
                    {/**   <div className="card-footer">
                        <Navigation
                            data={list.navigation}
                            page={options.page}
                            onNavigate={onNavigate}
                        />
                    </div>*/}
                </React.Fragment>
            )}
        </div>
    );
}

Page.Layout = AccountLayout;

export default Page;
