// application
import { AppAction } from '~/store/types';
import { IProduct } from '~/interfaces/product';
import { IProductFeatured } from '~/interfaces/productsFeatured';

export const QUICKVIEW_OPEN = 'QUICKVIEW_OPEN';
export const QUICKVIEW_CLOSE = 'QUICKVIEW_CLOSE';

export const QUICKVIEW_PRIVATE = 'QUICKVIEW_OPEN_PRIVATE';
export const QUICKVIEW_PRIVATE_SUCCESS = 'QUICKVIEW_PRIVATE_SUCCESS';
export const QUICKVIEW_PRIVATE_FAILURE = 'QUICKVIEW_PRIVATE_FAILURE';

export interface QuickviewOpenAction {
    type: typeof QUICKVIEW_OPEN;
    product: IProduct;
}
export interface QuickviewOpenActionFe {
    type: typeof QUICKVIEW_OPEN;
    productFeatured: IProductFeatured;
}


export interface QuickviewCloseAction {
    type: typeof QUICKVIEW_CLOSE;
}

export interface QuickviewOpenActionPrivate {
    type: typeof QUICKVIEW_PRIVATE_SUCCESS;
    product: any;
}

export type QuickviewAction =
    QuickviewOpenAction |
    QuickviewCloseAction| 
    QuickviewOpenActionFe|
    QuickviewOpenActionPrivate;

export type QuickviewThunkAction<T = void> = AppAction<QuickviewAction, T>;
