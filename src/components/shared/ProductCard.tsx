// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { globalIntl } from '~/services/i18n/global-intl';
import { useDispatch } from 'react-redux';

// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CompatibilityStatusBadge from '~/components/shared/CompatibilityStatusBadge';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import {IProductFeatured } from '~/interfaces/productsFeatured';
import { useCartAddItem } from '~/store/cart/cartHooks';
import { useCompareAddItem } from '~/store/compare/compareHooks';
import { useQuickviewOpen, useQuickviewOpenPrivate } from '~/store/quickview/quickviewHooks';
import { useWishlistAddItem,usewishlistAddItemFeatured } from '~/store/wishlist/wishlistHooks';
import {
    Cart20Svg,
    Compare16Svg,
    Quickview16Svg,
    Wishlist16Svg,
} from '~/svg';
import { isAuth } from '~/store/login/loginHooks'
import { getImages,getCataloLoading } from '~/store/imagesCarousel/imagesCarouselAction';
import {getImagesCarouselState} from '~/store/imagesCarousel/imagesCarouselHooks';

export type IProductCardElement = 'actions' | 'status-badge' | 'meta' | 'features' | 'buttons' | 'list-buttons';

export type IProductCardLayout = 'grid' | 'list' | 'table' | 'horizontal';

interface Props extends React.HTMLAttributes<HTMLElement> {
   // product: IProduct;
    layout?: IProductCardLayout;
    exclude?: IProductCardElement[];
    productFeatured: any;
}
//Edit redux for product add to cart and compare 
//redux for wishlist ready !!!!! 
//edit info for image,   
// componentes comentados para teste acondicionar para la info que me llega del producto
 

function ProductCard(props: Props) {
    const {
        //product,
        layout,
        exclude = [],
        className,
        productFeatured,
        ...rootProps
    } = props;
    const intl = useIntl();
   // const featuredAttributes = product.attributes.filter((x) => x.featured);
   const is_auth = isAuth()
   const allImages = getImagesCarouselState();
   const dispatch = useDispatch()
    const cartAddItem = useCartAddItem();
    const quickviewOpen = useQuickviewOpen();
    const quickviewOpenPrivate = useQuickviewOpenPrivate();

    const compareAddItem = useCompareAddItem();
    const wishlistAddItem = useWishlistAddItem();
    const wishlistAddItemFeatured = usewishlistAddItemFeatured();
   


    const showQuickview = () => quickviewOpen(productFeatured?.code, true);
    const showQuickviewPrivate = () => quickviewOpenPrivate(productFeatured?.code, true);

   // const addToWishlist = () => wishlistAddItem(productFeatured);
    const addToFeaturedWishlist = () => wishlistAddItemFeatured(productFeatured);
   const addToCompare = () => compareAddItem(productFeatured);

    const rootClasses = classNames('product-card', className, {
        [`product-card--layout--${layout}`]: layout,
    });

    const description:any = globalIntl()?.formatMessage(
        { id: 'TEXT_CATEGORY_DESCRIPTION' },
    )
    const ondetails =()=>{
        is_auth ? quickviewOpenPrivate(productFeatured?.code, false): quickviewOpen(productFeatured?.code, false)
        dispatch(getImages(productFeatured.code))
        }
    return (
        <div className={rootClasses} {...rootProps}>
            <div className="product-card__actions-list">
                <AsyncAction
                    action={() => 
                        is_auth ?  showQuickviewPrivate() : showQuickview()
                    }    
                    render={({ run, loading }) => (
                        <button
                            type="button"
                            className={classNames('product-card__action product-card__action--quickview', {
                                'product-card__action--loading': loading,
                            })}
                            aria-label={intl.formatMessage({ id: 'BUTTON_QUICKVIEW' })}
                            onClick={()=>{run ? run() : null;
                                dispatch(getCataloLoading());
                                dispatch(getImages(productFeatured.code))
                               // console.log('click',productFeatured.code)
                            }}
                         //   onClick={run}
                        >
                            <Quickview16Svg />
                        </button>
                    )}
                />

                {!exclude.includes('actions') && (
                    <React.Fragment>
                        <AsyncAction
                            action={() => addToFeaturedWishlist()}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    className={classNames('product-card__action product-card__action--wishlist', {
                                        'product-card__action--loading': loading,
                                    })}
                                    aria-label={intl.formatMessage({ id: 'BUTTON_ADD_TO_WISHLIST' })}
                                    onClick={run}
                                >
                                    <Wishlist16Svg />
                                </button>
                            )}
                        />
                      {/**   <AsyncAction
                            action={() => addToCompare()}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    className={classNames('product-card__action product-card__action--compare', {
                                        'product-card__action--loading': loading,
                                    })}
                                    aria-label={intl.formatMessage({ id: 'BUTTON_ADD_TO_COMPARE' })}
                                    onClick={run}
                                >
                                    <Compare16Svg />
                                </button>
                            )}
                        /> */}
                    </React.Fragment>
                )}
            </div>

            <div className="product-card__image">
                <div className="image image--type--product">
                    <AppLink className="image__body">
                        {productFeatured.image_principal === null || productFeatured.image_principal ==="" ?(
                        <AppImage className="image__tag"  src="/images/noimages/noimage3.jpg"   />
                        ):(
                        <AppImage className="image__tag" src={productFeatured?.image_principal} />) }
                    </AppLink>
                </div> 

                {!exclude.includes('status-badge') && (
                    <CompatibilityStatusBadge className="product-card__fit" product={productFeatured} />
                )} 
            </div>

            <div className="product-card__info">
                {!exclude.includes('meta') && (
                    <div className="product-card__meta">
                        <span className="product-card__meta-title">
                            <FormattedMessage id="TEXT_SKU" />
                            {': '}
                        </span>
                        <span style={{color:"black", fontWeight:'bold'}}>{productFeatured.code}</span>
                    </div>
                )}

                <div className="product-card__name">
                    { /**  {productFeatured.badges && productFeatured.badges.length > 0 && (
                        <div className="product-card__badges">
                            {productFeatured.badges.map((badge:any) => (
                                <div key={badge} className={`tag-badge tag-badge--${badge}`}>{badge}</div>
                            ))}
                        </div>
                    )}
                    <AppLink href={url.product(productFeatured)}>{productFeatured.name}</AppLink>  */}
                     <AppLink onClick={ ondetails} href={url.producturl(productFeatured.code)}>{productFeatured[description]}</AppLink> 
                </div>

                <div className="product-card__rating">
                  {/**   <Rating className="product-card__rating-stars" value={product.rating || 0} />
                    <div className=" product-card__rating-label">
                        <FormattedMessage
                            id="TEXT_RATING_LABEL"
                            values={{
                                rating: product.rating,
                                reviews: product.reviews,
                            }}
                        />
                    </div> */}
                </div>

                {!exclude.includes('features') && productFeatured.length > 0 && (
                    <div className="product-card__features">
                        <ul>
                            {productFeatured.map((attribute:any, index:any) => (
                                <li key={index}>
                                    {attribute.name}
                                    {': '}
                                    {attribute.values.map((x:any) => x.name).join(', ')}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="product-card__footer">
                <div className="product-card__prices">
                      {/**     {product.compareAtPrice !== null && (
                        <React.Fragment>
                            <div className="product-card__price product-card__price--new">
                                <CurrencyFormat value={product.price} />
                            </div>
                            <div className="product-card__price product-card__price--old">
                                <CurrencyFormat value={product.compareAtPrice} />
                            </div>
                        </React.Fragment>
                    )}
                    {product.compareAtPrice === null && (
                        <div className="product-card__price product-card__price--current">
                            <CurrencyFormat value={product.price} />
                        </div>
                    )} */}
                </div>
                {productFeatured.sale_price !== undefined  && ( <>
              
                {!exclude.includes('buttons') && (
                    <React.Fragment>
                         <AsyncAction
                            action={() => cartAddItem(productFeatured,[],1)}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    className={classNames('product-card__addtocart-icon', {
                                        'product-card__addtocart-icon--loading': loading,
                                    })}
                                    aria-label={intl.formatMessage({ id: 'BUTTON_ADD_TO_CART' })}
                                    onClick={run}
                                >
                                    <Cart20Svg />
                                </button>
                            )}
                        /> 
                        {!exclude.includes('list-buttons') && (
                            <React.Fragment>
                                <AsyncAction
                                    action={() => cartAddItem(productFeatured,[],1)}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('product-card__addtocart-full', {
                                                'product-card__addtocart-full--loading': loading,
                                            })}
                                            onClick={run}
                                        >
                                            <FormattedMessage id="BUTTON_ADD_TO_CART" />
                                        </button>
                                    )}
                                />
                                <AsyncAction
                                    action={() => addToFeaturedWishlist()}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('product-card__wishlist', {
                                                'product-card__wishlist--loading': loading,
                                            })}
                                            onClick={run}
                                        >
                                            <Wishlist16Svg />
                                            <span>
                                                <FormattedMessage id="BUTTON_ADD_TO_WISHLIST" />
                                            </span>
                                        </button>
                                    )}
                                />
                                <AsyncAction
                                    action={() => addToCompare()}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('product-card__compare', {
                                                'product-card__compare--loading': loading,
                                            })}
                                            onClick={run}
                                        >
                                            <Compare16Svg />
                                            <span>
                                                <FormattedMessage id="BUTTON_ADD_TO_COMPARE" />
                                            </span>
                                        </button>
                                    )}
                                />
                            </React.Fragment> 
                        )} 
                    </React.Fragment>
                )}
                  </>
                )}
            </div>
        </div>
    );
}

export default React.memo(ProductCard);
