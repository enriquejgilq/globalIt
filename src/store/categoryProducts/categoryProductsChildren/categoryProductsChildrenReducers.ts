import { 
    GET_CATEGORY_CHILDREN_PRODUCTS,
    GET_CATEGORY_PRODUCTS_CHILDREN_FAILURE,
    GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS,
    CLEAR_CATEGORY_CHILDREN
 } from './categoryProductsChildrenActionTypes'

const defaultState: any = {
    count: '',
    next: null,
    previous: null,
    results: [],
    error: false,
    loading: false

}
export const CATEGORY_PRODUCTS_CHILDREN_NAMESPACE = 'categoryProductsChildren'; 
const categoryProductsChildrenReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS:
            return {
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results,
                error: false,
                loading: false
            }
        case GET_CATEGORY_PRODUCTS_CHILDREN_FAILURE:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: action.payload,
                loading: false
            }
        case GET_CATEGORY_CHILDREN_PRODUCTS:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: false,
                loading: true
            }
        case CLEAR_CATEGORY_CHILDREN:
            return {
                count: '',
                next: null,
                previous: null,
                results: [],
                error: false,
                loading: false
            }
        default:
            return state;
    }
}
export default categoryProductsChildrenReducer;