import {
    GET_ALL_QUOTES,
    GET_ALL_QUOTES_SUCCESS,
    GET_ALL_QUOTES_FAILURE,
    GET_BY_ID_QUOTES,
    GET_BY_ID_QUOTES_SUCCESS,
    GET_BY_ID_QUOTES_FAILURE,
    CREATE_QUOTES,
    CREATE_QUOTES_SUCCESS,
    CREATE_QUOTES_FAILURE,
    GET_LIST_QUOTES,
    GET_LIST_QUOTES_SUCCESS,
    GET_LIST_QUOTES_FAILURE,
} from "./quotesActionTypes";

const defaultState: any = {
    count: "",
    next: null,
    previous: null,
    results_all: [],
    results_id: [],
    results_list: [],
    results_create: [],
    error: false,
    loading: false,
};
export const QUOTES_NAMESPACE = "quotes";
const quotesReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case GET_ALL_QUOTES_SUCCESS:
            return {
               // ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results_all: action.payload.results,
                error: false,
                loading: false,
            };
        case GET_ALL_QUOTES_FAILURE:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                results_all: [],
                error: action.payload,
                loading: false,
            };
        case GET_ALL_QUOTES:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                results_all: [],
                error: false,
                loading: true,
            };
        case GET_BY_ID_QUOTES_SUCCESS:
            return {
                ...state,
                results_id: action.payload,
                error: false,
                loading: false,
            };
        case GET_BY_ID_QUOTES_FAILURE:
            return {
                ...state,
                results_id: [],
                error: action.payload,
                loading: false,
            };
        case GET_BY_ID_QUOTES:
            return {
                ...state,
                results_id: [],
                error: false,
                loading: true,
            };
        case GET_LIST_QUOTES_SUCCESS:
            return {
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results_list: action.payload.results,
                error: false,
                loading: false,
            };
        case GET_LIST_QUOTES_FAILURE:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                results_list: [],
                error: action.payload,
                loading: false,
            };
        case GET_LIST_QUOTES:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                results_list: [],
                error: false,
                loading: true,
            };
        case CREATE_QUOTES_SUCCESS:
            return {
                ...state,
                results_create: action.payload,
                error: false,
                loading: false,
            };
        case CREATE_QUOTES_FAILURE:
            return {
                ...state,
                results_create: [],
                error: action.payload,
                loading: false,
            };
        case CREATE_QUOTES:
            return {
                ...state,
                results_create: [],
                error: false,
                loading: true,
            };
        default:
            return state;
    }
};
export default quotesReducer;
