// application
import { AppAction } from '~/store/types';
import { IProduct } from '~/interfaces/product';
import { IProductFeatured } from '~/interfaces/productsFeatured';

export const QUICKVIEW_OPEN = 'QUICKVIEW_OPEN';
export const QUICKVIEW_CLOSE = 'QUICKVIEW_CLOSE';

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

export type QuickviewAction =
    QuickviewOpenAction |
    QuickviewCloseAction| 
    QuickviewOpenActionFe;

export type QuickviewThunkAction<T = void> = AppAction<QuickviewAction, T>;
