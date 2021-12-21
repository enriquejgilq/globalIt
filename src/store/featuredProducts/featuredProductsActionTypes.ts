import {IFeaturedProducts} from '~/interfaces/featuredProducts';
import { AppAction } from '~/store/types';


export const FETCH_FEATURED_PRODUCTS = 'FETCH_FEATURED_PRODUCTS';

export interface IFeaturedProductsAction {
    type: string;
    payload: IFeaturedProducts
}
export type FeaturedProducts = Promise<IFeaturedProductsAction>; 

export type FeaturedProductsThunkAction<T = void> = AppAction<IFeaturedProductsAction, T>;