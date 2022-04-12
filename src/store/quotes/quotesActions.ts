import axios from "axios";
import { API } from "~/api/constantsApi";
import { globalIntl } from "~/services/i18n/global-intl";
import {
    CREATE_QUOTES,
    CREATE_QUOTES_SUCCESS,
    CREATE_QUOTES_FAILURE,
    GET_ALL_QUOTES,
    GET_ALL_QUOTES_SUCCESS,
    GET_ALL_QUOTES_FAILURE,
    GET_BY_ID_QUOTES,
    GET_BY_ID_QUOTES_SUCCESS,
    GET_BY_ID_QUOTES_FAILURE,
    GET_LIST_QUOTES,
    GET_LIST_QUOTES_SUCCESS,
    GET_LIST_QUOTES_FAILURE,
    IQuotesAction,
    IQuotesActionLoader,
    quotesThunkAction,
    IQuotesClearAction,
    CLEAR_QUOTES,
} from "~/store/quotes/quotesActionTypes";
//Retrieve quote per number quotations/quote/202200001/
export function getQuotesById(payload: any): IQuotesAction {
    return {
        type: GET_BY_ID_QUOTES_SUCCESS,
        payload,
    };
}

export function getQuotesByIdError(payload: any): IQuotesAction {
    return {
        type: GET_BY_ID_QUOTES_FAILURE,
        payload,
    };
}
export function getQuotesByIdLoader(): IQuotesActionLoader {
    return {
        type: GET_BY_ID_QUOTES,
    };
}
//Retrieve quote per number
export function getQuotesByIdAxios(payload: any): quotesThunkAction<Promise<void>> {
    return (dispatch, getState) =>
        new Promise((resolve) => {
            const state = getState();

            const apiQuotesById = globalIntl()?.formatMessage({ id: "API_GET_QUOTES_BY_ID" });
            axios
                .get(API + apiQuotesById + payload, {
                    headers: {
                        Authorization: "Token " + state.login.access_token,
                    },
                })
                .then((response) => {
                    dispatch(getQuotesById(response.data));
                    resolve();
                })
                .catch((error) => {
                    dispatch(getQuotesByIdError(error ? error.response.data : "Algo salio mal"));
                });
        });
}
//List all quotes /quotations/quote/
export function getQuotesList(payload: any): IQuotesAction {
    return {
        type: GET_ALL_QUOTES_SUCCESS,
        payload,
    };
}

export function getQuotesListError(payload: any): IQuotesAction {
    return {
        type: GET_ALL_QUOTES_FAILURE,
        payload,
    };
}
export function getQuotesListLoader(): IQuotesActionLoader {
    return {
        type: GET_ALL_QUOTES,
    };
}
//axios get request list all quotes
export function getQuotesAxios(): quotesThunkAction<Promise<void>> {
    return (dispatch, getState) =>
        new Promise((resolve) => {
            const state = getState();
            const apiQuotesList = globalIntl()?.formatMessage({ id: "API_GET_QUOTES_LIST" });
            axios
                .get(API + apiQuotesList, {
                    headers: {
                        Authorization: "Token " + state.login.access_token,
                    },
                })
                .then((response) => {
                    dispatch(getQuotesList(response.data));
                    resolve();
                })
                .catch((error) => {
                    dispatch(getQuotesListError(error ? error.response.data : "Algo salio mal"));
                });
        });
}

//quotations/detail-quote-number/202200006/
export function getQuotesDetailList(payload: any): IQuotesAction {
    return {
        type: GET_LIST_QUOTES_SUCCESS,
        payload,
    };
}

export function getQuotesDetailListError(payload: any): IQuotesAction {
    return {
        type: GET_LIST_QUOTES_FAILURE,
        payload,
    };
}
export function getQuotesDetailListLoader(): IQuotesActionLoader {
    return {
        type: GET_LIST_QUOTES,
    };
}
//axios get detail List quotation detail filter number
export function getQuotesDetailAxios(payload: any): quotesThunkAction<Promise<void>> {
    return (dispatch, getState) =>
        new Promise((resolve) => {
            const state = getState();
            const apiQuotesListDetail = globalIntl()?.formatMessage({ id: "API_GET_QUOTES_DETAIL" });
            axios
                .get(API + apiQuotesListDetail + payload, {
                    headers: {
                        Authorization: "Token " + state.login.access_token,
                    },
                })
                .then((response) => {
                    dispatch(getQuotesDetailList(response.data));
                    resolve();
                })
                .catch((error) => {
                    dispatch(getQuotesDetailListError(error ? error.response.data : "Algo salio mal"));
                });
        });
}
//create quote
export function createQuotes(payload: any): IQuotesAction {
    return {
        type: CREATE_QUOTES_SUCCESS,
        payload,
    };
}

export function createQuotesError(payload: any): IQuotesAction {
    return {
        type: CREATE_QUOTES_FAILURE,
        payload,
    };
}

export function createQuotesLoader(): IQuotesActionLoader {
    return {
        type: CREATE_QUOTES,
    };
}

export function createQuotesAxios(payload: any): quotesThunkAction<Promise<void>> {
    return (dispatch, getState) =>
        new Promise((resolve) => {
            const state = getState();
            const apiCreateQuotes = globalIntl()?.formatMessage({ id: "API_CREATE_QUOTES" });
            axios({
                method: "POST",
                url: API + apiCreateQuotes,
                data: payload,
                headers: {
                    Authorization: "Token " + state.login.access_token,
                },
            })
                .then((response) => {
                    dispatch(createQuotes(response.data));
                    resolve();
                })
                .catch((error) => {
                    dispatch(createQuotesError(error.response.data));
                    throw error.response?.data;
                });
        });
}
export function quotesClear ():IQuotesClearAction{ 
    return {
        type: CLEAR_QUOTES,
    };
}