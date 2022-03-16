import { AppAction } from '~/store/types';

export const RELATED_PRODUCTS = 'RELATED_PRODUCTS';
export const RELATED_PRODUCTS_SUCCESS = 'RELATED_PRODUCTS_SUCCESS';
export const RELATED_PRODUCTS_FAILURE = 'RELATED_PRODUCTS_FAILURE';

export interface IRelatedProductsAction {
    type: string;
    payload: any
}

export interface IRelatedProductsActionLoader {
    type: string;
}

export type RelatedProductsAction = 
Promise<IRelatedProductsAction> |
IRelatedProductsActionLoader; 

export type relatedProductsThunkAction<T = void> = AppAction<IRelatedProductsAction, T>;