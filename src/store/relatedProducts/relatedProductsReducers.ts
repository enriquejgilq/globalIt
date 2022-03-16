import {
   RELATED_PRODUCTS,
    RELATED_PRODUCTS_SUCCESS,
    RELATED_PRODUCTS_FAILURE,
   } from './relatedProductsActionsTypes'
   const defaultState: any = {
    count: '',
    next: null,
    previous: null,
    results: [],
    error: false,
    loading: false

}
export const RELATED_PRODUCTS_NAMESPACE = 'relatedProducts';

const relatedProductsReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case RELATED_PRODUCTS_SUCCESS:
            return {
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results,
                error: false,
                loading: false
            }
        case RELATED_PRODUCTS_FAILURE:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: action.payload,
                loading: false
            }
        case RELATED_PRODUCTS:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: false,
                loading: true
            }
        default:
            return state;
    }
}
export default relatedProductsReducer;
