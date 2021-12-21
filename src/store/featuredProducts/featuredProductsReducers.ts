import {IFeaturedProducts} from '~/interfaces/featuredProducts';
import { FETCH_FEATURED_PRODUCTS } from './featuredProductsActionTypes';
const defaultState :IFeaturedProducts = {
    count: 0,
    next: '',
    previous: '',  
    results: []
}

export const FEATUREPRODUCT_NAMESPACE = 'featureproduct';

const featuredProductsReducer = (state: IFeaturedProducts = defaultState, action: any) => {
    switch (action.type) {
        case FETCH_FEATURED_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}
export default featuredProductsReducer;