import {
    GET_CATALOG_PRODUCTS,
    GET_CATALOG_PRODUCTS_SUCCESS,
    GET_CATALOG_PRODUCTS_FAILURE,
    CLEAR_CATALOG_PRODUCTS,
} from "./catalogProductsActionTypes";

const defaultState: any = {
    count: "",
    next: null,
    previous: null,
    results: [],
    error: false,
    loading: false,
};
export const CATALOG_PRODUCTS_NAMESPACE = "catalogProducts";

const catalogProductsReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case GET_CATALOG_PRODUCTS_SUCCESS:
            return {
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results,
                error: false,
                loading: false,
            };
        case GET_CATALOG_PRODUCTS_FAILURE:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                results: [],
                error: action.payload,
                loading: false,
            };
        case GET_CATALOG_PRODUCTS:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                results: [],
                error: false,
                loading: true,
            };
        case CLEAR_CATALOG_PRODUCTS:
            return {
                count: "",
                next: null,
                previous: null,
                results: [],
                error: false,
                loading: false,
            };

        default:
            return state;
    }
};
export default catalogProductsReducer;
