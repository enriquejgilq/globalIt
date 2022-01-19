import {
        GET_CATALOG_PRODUCTS,
        GET_CATALOG_PRODUCTS_SUCCESS,
        GET_CATALOG_PRODUCTS_FAILURE,
       } from './catalogProductsActionTypes'

const defaultState: any = {
    count: '',
    next: null,
    previous: null,
    results: [],
    error: false,
    loading: false

}
export const CATALOG_PRODUCTS_NAMESPACE = 'catalogProducts';

const catalogProductsReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case GET_CATALOG_PRODUCTS_SUCCESS:
            return {
                count: '',
                next: null,
                previous: null,
                results: action.payload,
                error: false,
                loading: false
            }
        case GET_CATALOG_PRODUCTS_FAILURE:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: action.payload,
                loading: false
            }
        case GET_CATALOG_PRODUCTS:
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
export default catalogProductsReducer;