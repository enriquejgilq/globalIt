// third-party
import { toast } from 'react-toastify';
// application
import { globalIntl } from '~/services/i18n/global-intl';
import { IProduct } from '~/interfaces/product';
import { IProductFeatured}  from '~/interfaces/productsFeatured';
import {
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM,
    WISHLIST_ADD_ITEM_FEATURED,
    WishlistAddItemAction,
    WishlistRemoveItemAction,
    WishlistThunkAction,
    WishlistAddItemActionFeatured
} from '~/store/wishlist/wishlistActionTypes';

export function wishlistAddItemSuccess(product: IProduct): WishlistAddItemAction {
    toast.success(globalIntl()?.formatMessage(
        { id: 'TEXT_TOAST_PRODUCT_ADDED_TO_WISHLIST' },
        { productName: product.name },
    ));

    return {
        type: WISHLIST_ADD_ITEM,
        product,
    };
}

export function wishlistAF(products: IProductFeatured): WishlistAddItemActionFeatured {
    toast.success(globalIntl()?.formatMessage(
        { id: 'TEXT_TOAST_PRODUCT_ADDED_TO_WISHLIST' },
        { productName: products.description_en },
    ));

    return {
        type: WISHLIST_ADD_ITEM_FEATURED,
        products,
    };
}

export function wishlistRemoveItemSuccess(productId: number): WishlistRemoveItemAction {
    return {
        type: WISHLIST_REMOVE_ITEM,
        productId,
    };
}

export function wishlistAddItem(product: IProduct): WishlistThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(wishlistAddItemSuccess(product));
                resolve();
            }, 250);
        })
    );
}
export function wishlistAddItemFeatured(products:IProductFeatured ) : WishlistThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(wishlistAF(products));
                resolve();
            }, 250);
        })
    );
}

export function wishlistRemoveItem(productId: number): WishlistThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(wishlistRemoveItemSuccess(productId));
                resolve();
            }, 250);
        })
    );
}
