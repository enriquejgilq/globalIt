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
            const apiCatalogProducts = globalIntl()?.formatMessage(
                { id: 'API_GET_CATALOG_PRODUCTS' },
            )
            axios.get(API + apiCatalogProducts+payload+'/?limit=15' )
                .then((response) => {
                  dispatch(getCatalogSuccess(response.data.results));
                    resolve()
                })
                .catch((error) => {
                   dispatch(getCatalogError(error ? error.response.data : 'Algo salio mal'));
                })
        }));
}

