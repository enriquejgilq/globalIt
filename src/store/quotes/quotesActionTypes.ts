import { AppAction } from '~/store/types';
//List all quotes /quotations/quote/
export const GET_ALL_QUOTES = 'GET_ALL_QUOTES';
export const GET_ALL_QUOTES_SUCCESS = 'GET_ALL_QUOTES_SUCCESS';
export const GET_ALL_QUOTES_FAILURE = 'GET_ALL_QUOTES_FAILURE';
//Retrieve quote per number quotations/quote/202200001/ 
export const GET_BY_ID_QUOTES = 'GET_BY_ID_QUOTES';
export const GET_BY_ID_QUOTES_SUCCESS = 'GET_BY_ID_QUOTES_SUCCESS';
export const GET_BY_ID_QUOTES_FAILURE = 'GET_BY_ID_QUOTES_FAILURE';
//Create quotation  quotations/quote/ POST!!!!!!
export const CREATE_QUOTES = 'CREATE_QUOTES';
export const CREATE_QUOTES_SUCCESS = 'CREATE_QUOTES_SUCCESS';
export const CREATE_QUOTES_FAILURE = 'CREATE_QUOTES_FAILURE';
//List quotation detail filter number /quotations/detail-quote-number/202200006/
export const GET_LIST_QUOTES = 'GET_LIST_QUOTES';
export const GET_LIST_QUOTES_SUCCESS = 'GET_LIST_QUOTES_SUCCESS';
export const GET_LIST_QUOTES_FAILURE = 'GET_LIST_QUOTES_FAILURE';

export interface IQuotesAction {
    type: string;
    payload: any
}
export interface IQuotesListAction {
    type: string;
}

export interface IQuotesActionLoader {
    type: string;
}
export type QuotesAction = 
Promise<IQuotesAction> |
IQuotesActionLoader| 
IQuotesListAction; 

export type quotesThunkAction<T = void> = AppAction<IQuotesAction, T>;