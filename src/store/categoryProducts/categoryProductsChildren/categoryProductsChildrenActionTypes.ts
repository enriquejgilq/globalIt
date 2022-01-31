import { AppAction } from '~/store/types';

export const GET_CATEGORY_CHILDREN_PRODUCTS = 'GET_CATEGORY_CHILDREN_PRODUCTS';
export const GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS = 'GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS';
export const GET_CATEGORY_PRODUCTS_CHILDREN_FAILURE = 'GET_CATEGORY_PRODUCTS_CHILDREN_FAILURE';

export const GET_CATEGORY_CHILDREN_PRODUCTS_PRIVATE = 'GET_CATEGORY_CHILDREN_PRODUCTS_PRIVATE';
export const GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS_PRIVATE = 'GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS_PRIVATE';
export const GET_CATEGORY_PRODUCTS_CHILDREN_FAILURE_PRIVATE = 'GET_CATEGORY_PRODUCTS_CHILDREN_FAILURE_PRIVATE';
export const CLEAR_CATEGORY_CHILDREN = 'CLEAR_CATEGORY_CHILDREN';

export interface ICategoryProductsChildrenAction {
    type: string;
    payload: any
}

export interface ICategoryProductsChildrenActionLoader {
    type: string;
}
export interface ICategoryProductsChildrenClearAction {
    type: string;
}
export type CategoryProductsChildrenAction = 
Promise<ICategoryProductsChildrenAction> |
ICategoryProductsChildrenActionLoader | 
ICategoryProductsChildrenClearAction; 

export type categoryProductsChildrenThunkAction<T = void> = AppAction<ICategoryProductsChildrenAction, T>;