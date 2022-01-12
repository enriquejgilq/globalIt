import {IFeaturedCategories} from '~/interfaces/featuredCategories';
import { AppAction } from '~/store/types';

export const GET_CATERGORIES = 'GET_CATERGORIES';
export const GET_CATERGORIES_SUCCESS = 'GET_CATERGORIES_SUCCESS';
export const GET_CATERGORIES_FAILURE = 'GET_CATERGORIES_FAILURE';

export interface ICategoriesAction {
    type: string;
    payload: IFeaturedCategories
}
export interface ICategoriesActionLoading {
    type: typeof GET_CATERGORIES;
}
export type CategoriesAction = 
Promise<ICategoriesAction> |
ICategoriesActionLoading; 

export type categorieshunkAction<T = void> = AppAction<ICategoriesAction, T>;