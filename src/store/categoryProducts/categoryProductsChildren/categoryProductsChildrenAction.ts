import axios from 'axios';
import { API } from '~/api/constantsApi';
import { globalIntl } from '~/services/i18n/global-intl';

import {
    GET_CATEGORY_CHILDREN_PRODUCTS,
    GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS,
    GET_CATEGORY_PRODUCTS_CHILDREN_FAILURE,
    CLEAR_CATEGORY_CHILDREN,
    ICategoryProductsChildrenAction,
    ICategoryProductsChildrenActionLoader,
    ICategoryProductsChildrenClearAction,
    categoryProductsChildrenThunkAction,
    GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS_PRIVATE

} from '~/store/categoryProducts/categoryProductsChildren/categoryProductsChildrenActionTypes';

export function getCategoryChildren(payload: any): ICategoryProductsChildrenAction {
    return {
        type: GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS,
        payload
    };
}
export function getCategoryChildrenError ( payload: any): ICategoryProductsChildrenAction {
    return {
        type: GET_CATEGORY_PRODUCTS_CHILDREN_FAILURE,
        payload
    };
}
export function getCategoryChildrenLoading ( ): ICategoryProductsChildrenActionLoader {
    return {
        type: GET_CATEGORY_CHILDREN_PRODUCTS,
    };
}
export function clearCategoryChildren ( ): ICategoryProductsChildrenClearAction {
    return {
        type: CLEAR_CATEGORY_CHILDREN,
    };
}
export function getCategoryChildrenPrivate(payload: any): ICategoryProductsChildrenAction {
    return {
        type: GET_CATEGORY_PRODUCTS_CHILDREN_SUCCESS_PRIVATE,
        payload
    };
}

export function getCategoryProductsChildren(payload:any): categoryProductsChildrenThunkAction<Promise<void>> {
    return (dispatch) => (
        new Promise((resolve) => {
            const apiCategoryProducts = globalIntl()?.formatMessage(
                { id: 'API_GET_PRODUCTS_CHILDREN' },
            )
            axios.get(API + apiCategoryProducts+ payload)
                .then((response) => {
                  dispatch(getCategoryChildren(response.data));
                    resolve()
                })
                .catch((error) => {
                   dispatch(getCategoryChildrenError(error ? error.response.data : 'Algo salio mal'));
                })
        }));
}

export function getCategoryProductsChildrenPrivate(payload:any  ): categoryProductsChildrenThunkAction<Promise<void>> {
    return (dispatch, getState) => (
        new Promise((resolve) => {
            const state = getState()
            const apiCategoryProducts = globalIntl()?.formatMessage(
                { id: 'API_GET_PRODUCTS_CHILDREN' },
            )
            axios.get(API + apiCategoryProducts+ payload,{
                headers: {
                    Authorization: 'Token ' + state.login.access_token 
                }
            }).then((response) => {
                dispatch(getCategoryChildrenPrivate(response.data));
                resolve()
            }
            ).catch((error) => {
                dispatch(getCategoryChildrenError(error ? error.response.data : 'Algo salio mal'));
            }
            )
        }));     
}

