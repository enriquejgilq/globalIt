// react
import React, { useCallback, useMemo, useState } from 'react';
import { globalIntl } from '~/services/i18n/global-intl';

// third-party
import classNames from 'classnames';
import { Controller, FormProvider } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'reactstrap';
// application
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import InputNumber from '~/components/shared/InputNumber';
import ProductForm from '~/components/shop/ProductForm';
import ProductGallery from '~/components/shop/ProductGallery';
import Rating from '~/components/shared/Rating';
import StockStatusBadge from '~/components/shared/StockStatusBadge';
import url from '~/services/url';
import { Compare16Svg, Cross12Svg, Wishlist16Svg } from '~/svg';
import { useCompareAddItem } from '~/store/compare/compareHooks';
import { useProductForm } from '~/services/forms/product';
import { useQuickview, useQuickviewClose } from '~/store/quickview/quickviewHooks';
import { useWishlistAddItem } from '~/store/wishlist/wishlistHooks';
import { getImagesCarouselState } from '~/store/imagesCarousel/imagesCarouselHooks';
import { useCartAddItem } from '~/store/cart/cartHooks';
import { isAuth, viewPrices, viewStock } from '~/store/login/loginHooks'

import { Button, Input } from 'reactstrap';

function Quickview() {
    const quickview = useQuickview();
    const quickviewClose = useQuickviewClose();
    const is_auth = isAuth()
    const view_prices = viewPrices()
    const view_stock = viewStock()

    const wishlistAddItem = useWishlistAddItem();
    const compareAddItem = useCompareAddItem();
    const cartAddItem = useCartAddItem();
    const { product } = quickview;
    const allImages = getImagesCarouselState();
    const image = useMemo(() => allImages.results.map((item: any) => { return item.url }) || [], [product]);
    const productForm = useProductForm(product);

    const [quantity, setQuantity] = useState<any>(1);
    const [onPress, setOnPress] = useState(false);

    const description: any = globalIntl()?.formatMessage(
        { id: 'TEXT_CATEGORY_DESCRIPTION' },
    )
    const noimage: any = globalIntl()?.formatMessage(
        { id: 'TEXT_EMPTY_IMAGES' },
    )
    const amount: any = globalIntl()?.formatMessage(
        { id: 'TABLE_QUANTITY' },
    )
    const prices: any = globalIntl()?.formatMessage(
        { id: 'BUTTON_VIEW_PRICES' },
    )
    const toggle = useCallback(() => {
        if (quickview.open) {
            quickviewClose();
        }
    }, [quickview.open, quickviewClose]);
    const handleEvent = (event: any) => {
        setOnPress(true)
        setTimeout(() => {
            setOnPress(false)
        }, 1500);
    }
    if (!product) {
        return null;
    }
    const productTemplate = (
        <div className="quickview__product">
            <div className="quickview__product-name">
                {product[description]}
            </div>
            {/**   <div className="quickview__product-rating">
                <div className="quickview__product-rating-stars">
                    <Rating value={product.rating || 0} />
                </div>
                 <div className="quickview__product-rating-title">
                    <FormattedMessage
                        id="TEXT_RATING_LABEL"
                        values={{
                            rating: product.rating,
                            reviews: product.reviews,
                        }}
                    />
                </div> 
            </div>*/}
            <div className="quickview__product-meta">
                <table>
                    <tbody>
                        <tr>
                            {/**<th>
                                <FormattedMessage id="TABLE_SKU" />
                            </th>*/}
                            <td>{product.code}</td>
                        </tr>
                        {view_stock === true && (
                            <div style={{ margin: '5px' }}><b>
                                {product.stock <= 0 ?
                                    (<StockStatusBadge className="product__stock ml-1" stock={"out-of-stock"} defaultValue={parseInt(product.available, 10)} />)
                                    : product.stock <= 15 ?
                                        (<StockStatusBadge className="product__stock ml-1" stock={"on-backorder"} defaultValue={parseInt(product.available, 10)} />)
                                        : (<StockStatusBadge className="product__stock ml-1" stock={"in-stock"} defaultValue={parseInt(product.available, 10)} />)
                                }  </b>
                            </div>
                        )}
                        {/**   {product.brand && (
                            <React.Fragment>
                                <tr>
                                    <th>
                                        <FormattedMessage id="TABLE_BRAND" />
                                    </th>
                                    <td>
                                        <AppLink href={url.brand(product.brand)}>
                                            {product.brand.name}
                                        </AppLink>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <FormattedMessage id="TABLE_COUNTRY" />
                                    </th>
                                    <td>
                                        <FormattedMessage
                                            id={`COUNTRY_NAME_${product.brand.country}`}
                                        />
                                    </td>
                                </tr>
                            </React.Fragment>
                        )}
                        <tr>
                            <th>
                                <FormattedMessage id="TABLE_PART_NUMBER" />
                            </th>
                            <td>{product.partNumber}</td>
                        </tr>*/}
                    </tbody>
                </table>
            </div>

            {product[description] && (
                <div className="quickview__product-description">
                    {product[description]}
                </div>
            )}
            <div className="quickview__product-prices-stock">
                <div className="quickview__product-prices">


                    {/**   {product.compareAtPrice !== null && (
                        <React.Fragment>
                            <div className="quickview__product-price quickview__product-price--old">
                                <CurrencyFormat value={product.compareAtPrice} />
                            </div>
                            <div className="quickview__product-price quickview__product-price--new">
                                <CurrencyFormat value={product.price} />
                            </div>
                        </React.Fragment>
                    )} */}

                    {product.compareAtPrice === null && (
                        <div className="quickview__product-price quickview__product-price--current">
                            <CurrencyFormat value={product.price} />
                        </div>
                    )}
                </div>
            </div>

            <ProductForm
                options={product.options}
                className="quickview__product-form"
                namespace="options"
            />

            <div className="quickview__product-actions">
                <div className="quickview__product-actions-item quickview__product-actions-item--quantity">
                    {/**   <Controller
                        name="quantity"
                        rules={{ required: true }}
                        render={({ field: { ref: fieldRef, ...fieldProps } }) => (
                            <InputNumber
                                min={1}
                                inputRef={fieldRef}
                                {...fieldProps}
                            />
                        )}
                    />*/}
                </div>
                { is_auth === true && (<>                    
                <div className="quickview__product-actions-item quickview__product-actions-item--addtocart">
                    <div style={{
                        height: '40px',
                        display: 'flex', flexDirection: 'row', gap: '5px', flex: '1', justifyContent: 'center',
                        alignContent: 'center', alignItems: 'center', alignSelf: 'center'
                    }}>
                        {view_prices === true && (<>

                            <button type="button" className={`btn btn-primary btn-xs`}
                                onClick={handleEvent}
                            >
                                {onPress === true ? <CurrencyFormat value={product.price} /> : prices}
                            </button>
                        </>)}
                        <Input style={{ height: '25px', width: '90px', fontSize: '12px', textAlign: 'justify' }}
                            placeholder={amount}
                            type='number'
                            min="0"
                            onChange={(e) => {
                                const number = e.target.value;
                                setQuantity(parseInt(number));
                            }}
                        />
                        <AsyncAction
                            action={() => cartAddItem(product, [], quantity)}
                            render={({ run, loading }) => (
                                <div className="quickview__product-actions-item quickview__product-actions-item--wishlist">
                                    <button type="button" className={`btn btn-primary btn-xs`}
                                        onClick={run}
                                    >
                                        <FormattedMessage id="BUTTON_ADD_TO_CART" />

                                    </button>
                                </div>
                            )}
                        />

                    </div>

                    {/**   <button
                        type="submit"
                        className={classNames('btn', 'btn-primary', 'btn-block', {
                            'btn-loading':'',
                            
                        })}
                    >
                        <FormattedMessage id="BUTTON_ADD_TO_CART" />
                    </button> */}
                </div>
                </>)}
                {/**  <AsyncAction
                    action={() => wishlistAddItem(product)}
                    render={({ run, loading }) => (
                        <div className="quickview__product-actions-item quickview__product-actions-item--wishlist">
                            <button
                                type="button"
                                className={classNames('btn btn-muted btn-icon', {
                                    'btn-loading': loading,
                                })}
                                onClick={run}
                            >
                                <Wishlist16Svg />
                            </button>
                        </div>
                    )}
                />

                <AsyncAction
                    action={() => compareAddItem(product)}
                    render={({ run, loading }) => (
                        <div className="quickview__product-actions-item quickview__product-actions-item--compare">
                            <button
                                type="button"
                                className={classNames('btn btn-muted btn-icon', {
                                    'btn-loading': loading,
                                })}
                                onClick={run}
                            >
                                <Compare16Svg />
                            </button>
                        </div>
                    )}
                />*/}
            </div>
        </div>
        
    );

    return (
        <Modal isOpen={quickview.open} toggle={toggle} centered className="quickview">
            <button type="button" className="quickview__close" onClick={quickviewClose}>
                <Cross12Svg />
            </button>

            <FormProvider {...productForm.methods}>
                <form onSubmit={productForm.submit} className="quickview__body">
                    {image.length === 0 ? (
                        <div style={{
                            width: '270px',
                            textAlign: 'justify',
                            justifyContent: 'center',

                        }}>
                            <p><b>{noimage}</b></p>
                        </div>
                    ) : (
                        <ProductGallery
                            className="quickview__gallery"
                            layout="quickview"
                            images={image} />)
                    }
                    {productTemplate}
                </form>
            </FormProvider>

            <AppLink href={url.producturl(product.code)}
                onClick={() => {
                    quickviewClose();
                }}
                className="quickview__see-details">
                <FormattedMessage id="BUTTON_SEE_FULL_DETAILS" />
            </AppLink>
        </Modal>
    );
}

export default Quickview;
