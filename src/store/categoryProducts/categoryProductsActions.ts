import axios from 'axios';
import { API } from '~/api/constantsApi';
import { globalIntl } from '~/services/i18n/global-intl';

import {
    GET_CATEGORY_PRODUCTS,
    GET_CATEGORY_PRODUCTS_SUCCESS,
    GET_CATEGORY_PRODUCTS_FAILURE,
    categoryProductsThunkAction,
    ICategoryProductsAction,
    ICategoryProductsActionLoader,

} from '~/store/categoryProducts/categoryProductsActionTypes';

export function getCategoryProducts(payload: any): ICategoryProductsAction {
    return {
        type: GET_CATEGORY_PRODUCTS_SUCCESS,
        payload
    };
}
export function getCategoryError ( payload: any): ICategoryProductsAction {
    return {
        type: GET_CATEGORY_PRODUCTS_FAILURE,
        payload
    };
}
export function getCategoryLoading ( ): ICategoryProductsActionLoader {
    return {
        type: GET_CATEGORY_PRODUCTS,
     
    };
}

export function getCategoryProductsParents(): categoryProductsThunkAction<Promise<void>> {
    return (dispatch) => (
        new Promise((resolve) => {
            const apiCategoryProducts = globalIntl()?.formatMessage(
                { id: 'API_GET_CATEGORY_PRODUCTS' },
            )
            axios.get(API + apiCategoryProducts )
                .then((response) => {
                  dispatch(getCategoryProducts(response.data.results));
                    resolve()
                })
                .catch((error) => {
                   dispatch(getCategoryError(error ? error.response.data : 'Algo salio mal'));
                })
        }));
}

