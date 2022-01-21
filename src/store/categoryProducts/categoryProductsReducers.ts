import { GET_CATEGORY_PRODUCTS, GET_CATEGORY_PRODUCTS_FAILURE, GET_CATEGORY_PRODUCTS_SUCCESS } from './categoryProductsActionTypes'

const defaultState: any = {
    count: '',
    next: null,
    previous: null,
    results: [],
    error: false,
    loading: false

}
export const CATEGORY_PRODUCTS_NAMESPACE = 'categoryProducts';

const categoryProductsReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case GET_CATEGORY_PRODUCTS_SUCCESS:
            return {
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results,
                error: false,
                loading: false
            }
        case GET_CATEGORY_PRODUCTS_FAILURE:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: action.payload,
                loading: false
            }
        case GET_CATEGORY_PRODUCTS:
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
export default categoryProductsReducer;