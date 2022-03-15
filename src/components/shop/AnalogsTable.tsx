// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';

interface Props {
    productId: number;
    applications:any;
    productPageLayout: any;
}

function AnalogsTable(props: Props) {
    const intl = useIntl();
    const { productId,applications, productPageLayout} = props;
    const [analogs, setAnalogs] = useState<IProduct[]>([]);

    useEffect(() => {
        let canceled = false;

        shopApi.getProductAnalogs(productId).then((result) => {
            if (canceled) {
                return;
            }

            setAnalogs(result);
        });

        return () => {
            canceled = true;
        };
    }, [productId]);

    console.log(applications)
    return (
        <div className="analogs-table">
            <table>
                <thead>
                    <tr>
                        <th className="analogs-table__column analogs-table__column--name">
                            <FormattedMessage id="TABLE_YEAR" />
                        </th>
                        <th className="analogs-table__column analogs-table__column--rating">
                            <FormattedMessage id="TABLE_BRAND" />
                        </th>
                        <th className="analogs-table__column analogs-table__column--brand">
                            <FormattedMessage id="TABLE_ENGINE" />
                        </th>
                        <th className="analogs-table__column analogs-table__column--rating">
                            <FormattedMessage id="TABLE_ENGINE" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {applications.results.map((item:any) => (
                        <tr key={item.id}>
                            <td className="analogs-table__column analogs-table__column--name">
                                <AppLink  className="analogs-table__product-name">
                                    {item.year}
                                </AppLink>
                                <br />
                                <div
                                    className="analogs-table__sku"
                                    data-title={intl.formatMessage({ id: 'TABLE_SKU' })}
                                >
                                    {item.brand}
                                </div>
                            </td>
                            <td className="analogs-table__column analogs-table__column--rating">
                                <div className="analogs-table__rating">
                                    <div className="analogs-table__rating-stars">
                                          {item.model}
                                    </div>
                                    <div className="analogs-table__rating-label">
                                       
                                    </div>
                                </div>
                            </td>
                            <td className="analogs-table__column analogs-table__column--rating">
                                <div className="analogs-table__rating">
                                    <div className="analogs-table__rating-stars">
                                          {item.engine}
                                    </div>
                                    <div className="analogs-table__rating-label">
                                       
                                    </div>
                                </div>
                            </td>
                            <td className="analogs-table__column analogs-table__column--rating">
                                <div className="analogs-table__rating">
                                    <div className="analogs-table__rating-stars">
                                          {item.engine2}
                                    </div>
                                    <div className="analogs-table__rating-label">
                                       
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AnalogsTable;
