// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import AppImage from '~/components/shared/AppImage';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    widgetTitle: React.ReactNode;
    products?: any;
}

function WidgetProducts(props: Props) {
    const {
        widgetTitle,
        className,
        products = [],
        ...rootProps
    } = props;

    const hasTitle = !!widgetTitle;
    const rootClasses = classNames('card', 'widget', 'widget-products', className);

    console.log(products.results.map((product: any) => product.product.code));
    // Este es !!!!!!!!!!
    return (
        <div className={rootClasses} {...rootProps}>
            {hasTitle && (
                <div className="widget__header">
                    <h4>{widgetTitle}</h4>
                </div>
            )}
            <div className="widget-products__list">
                {products.results.map((product: any) => (
                    <div key={product.id} className="widget-products__item">
                        <div className="widget-products__image">
                            <AppLink >
                                {product.product.image_principal === null ? (<AppImage className="image__tag" src="/images/noimages/noimage3.jpg" />
                                ) :
                                    (<AppImage src={product.product.image_principal} />)
                                }
                            </AppLink>
                        </div>
                        <div className="widget-products__info">
                            <div className="widget-products__name">
                                <AppLink >
                                    <b>{product.product.description_en} </b>
                                </AppLink>
                            </div>
                            <div className="widget-products__prices">
                                {product.product.code}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default React.memo(WidgetProducts);
