// application
import { AppAction } from '~/store/types';
import { IProduct } from '~/interfaces/product';
import { IProductFeatured}  from '~/interfaces/productsFeatured';

export const WISHLIST_ADD_ITEM = 'WISHLIST_ADD_ITEM';
export const WISHLIST_REMOVE_ITEM = 'WISHLIST_REMOVE_ITEM';
export const WISHLIST_ADD_ITEM_FEATURED = 'WISHLIST_ADD_ITEM_FEATURED';

export interface WishlistAddItemAction {
    type: typeof WISHLIST_ADD_ITEM;
    product: IProduct;
}
export interface WishlistAddItemActionFeatured {
    type: typeof WISHLIST_ADD_ITEM_FEATURED;
    products: IProductFeatured;
}



export interface WishlistRemoveItemAction {
    type: typeof WISHLIST_REMOVE_ITEM;
    productId: number;
}

export type WishlistAction =
    WishlistAddItemAction |
    WishlistRemoveItemAction |
    WishlistAddItemActionFeatured;

export type WishlistThunkAction<T = void> = AppAction<WishlistAction, T>;
