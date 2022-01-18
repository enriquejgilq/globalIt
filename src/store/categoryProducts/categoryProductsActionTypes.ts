import { AppAction } from '~/store/types';


export const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS';
export const GET_CATEGORY_PRODUCTS_SUCCESS = 'GET_CATEGORY_PRODUCTS_SUCCESS';
export const GET_CATEGORY_PRODUCTS_FAILURE = 'GET_CATEGORY_PRODUCTS_FAILURE';


export interface ICategoryProductsAction {
    type: string;
    payload: any
}

export interface ICategoryProductsActionLoader {
    type: string;
}

export type CategoryProductsAction = 
Promise<ICategoryProductsAction> |
ICategoryProductsActionLoader; 

export type categoryProductsThunkAction<T = void> = AppAction<ICategoryProductsAction, T>;