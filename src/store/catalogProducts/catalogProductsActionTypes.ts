import { AppAction } from '~/store/types';


export const GET_CATALOG_PRODUCTS = 'GET_CATALOG_PRODUCTS';
export const GET_CATALOG_PRODUCTS_SUCCESS = 'GET_CATALOG_PRODUCTS_SUCCESS';
export const GET_CATALOG_PRODUCTS_FAILURE = 'GET_CATEGORY_PRODUCTS_FAILURE';

export const CLEAR_CATALOG_PRODUCTS = 'CLEAR_CATALOG_PRODUCTS';


export interface ICatalogProductsAction {
    type: string;
    payload: any
}

export interface ICatalogProductsActionLoader {
    type: string;
}

export type CategoryProductsAction = 
Promise<ICatalogProductsAction> |
ICatalogProductsActionLoader; 

export type catalogProductsThunkAction<T = void> = AppAction<ICatalogProductsAction, T>;