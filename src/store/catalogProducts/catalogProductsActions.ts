import axios from 'axios';
import { API } from '~/api/constantsApi';
import { globalIntl } from '~/services/i18n/global-intl';

import {
    GET_CATALOG_PRODUCTS,
    GET_CATALOG_PRODUCTS_SUCCESS,
    GET_CATALOG_PRODUCTS_FAILURE,
    catalogProductsThunkAction,
    ICatalogProductsAction,
    ICatalogProductsActionLoader,

} from '~/store/catalogProducts/catalogProductsActionTypes';    

export function getCatalogSuccess(payload: any): ICatalogProductsAction {
    return {
        type: GET_CATALOG_PRODUCTS_SUCCESS,
        payload
    };
}
export function getCatalogError ( payload: any): ICatalogProductsAction {
    return {
        type: GET_CATALOG_PRODUCTS_FAILURE,
        payload
    };
}
export function getCataloLoading ( ): ICatalogProductsActionLoader {
    return {
        type: GET_CATALOG_PRODUCTS,
     
     
    };
}

export function getCatalogProducts(payload:any): catalogProductsThunkAction<Promise<void>> {
    return (dispatch) => (
        new Promise((resolve) => {
            axios.get(payload )
                .then((response) => {
                  dispatch(getCatalogSuccess(response.data));
                    resolve()
                })
                .catch((error) => {
                   dispatch(getCatalogError(error ? error.response.data : 'Algo salio mal'));
                })
        }));
}

export function getCatalogProductsPrivate(payload:any  ): catalogProductsThunkAction<Promise<void>> {
    return (dispatch, getState) => (
        new Promise((resolve) => {
            const state = getState()
            axios.get(payload,{
                headers: {
                    Authorization: 'Token ' + state.login.access_token 
                }
            }).then((response) => {
                dispatch(getCatalogSuccess(response.data));
                resolve()
            }
            ).catch((error) => {
                dispatch(getCatalogError(error ? error.response.data : 'Algo salio mal'));
            }
            )
        }));     
}
