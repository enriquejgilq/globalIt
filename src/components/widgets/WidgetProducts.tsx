// react
import React from 'react';
// third-party
import { globalIntl } from '~/services/i18n/global-intl';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import AppImage from '~/components/shared/AppImage';
import { getRelatedProductsAxios } from '~/store/relatedProducts/relatedProductsActions';
import { isAuth } from '~/store/login/loginHooks'
import { useQuickviewOpen, useQuickviewOpenPrivate } from '~/store/quickview/quickviewHooks';
import { getImages, getImageLoading } from '~/store/imagesCarousel/imagesCarouselAction';

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
    const dispatch = useDispatch()
    const is_auth = isAuth()
    const quickviewOpen = useQuickviewOpen();
    const quickviewOpenPrivate = useQuickviewOpenPrivate();
    const hasTitle = !!widgetTitle;
    const rootClasses = classNames('card', 'widget', 'widget-products', className);
    const description: any = globalIntl()?.formatMessage(
        { id: 'TEXT_CATEGORY_DESCRIPTION' },
    )

    const ondetails = (e: any) => {
        dispatch(getRelatedProductsAxios(e))
        is_auth ? quickviewOpenPrivate(e, false) : quickviewOpen(e, false)
         dispatch(getImageLoading())
         dispatch(getImages(e))

    }
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
                            <AppLink onClick={() => ondetails(product.product.code)} href={url.producturl(product.product.code)} >
                                {product.product.image_principal === null ? (<AppImage className="image__tag" src="/images/noimages/noimage3.jpg" />
                                ) :
                                    (<AppImage onClick={() => ondetails(product.product.code)} src={product.product.image_principal} />)
                                }
                            </AppLink>
                        </div>
                        <div className="widget-products__info">
                            <AppLink onClick={() => ondetails(product.product.code)} href={url.producturl(product.product.code)} className="widget-products__prices">
                                <b style={{ color: 'black', fontSize: '15px' }}>{product.product.code} </b>
                            </AppLink>
                            <div className="widget-products__name">
                                <AppLink onClick={() => ondetails(product.product.code)} href={url.producturl(product.product.code)}>
                                    {product.product[description]} 
                                </AppLink>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default React.memo(WidgetProducts);
