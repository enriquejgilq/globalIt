import axios from 'axios';
import { API } from '~/api/constantsApi';
import { globalIntl } from '~/services/i18n/global-intl';
import {
    RELATED_PRODUCTS,
    RELATED_PRODUCTS_SUCCESS,
    RELATED_PRODUCTS_FAILURE,
    relatedProductsThunkAction,
    IRelatedProductsAction,
    IRelatedProductsActionLoader,
} from '~/store/relatedProducts/relatedProductsActionsTypes';


export function getRelatedProducts(payload: any): IRelatedProductsAction {
    return {
        type: RELATED_PRODUCTS_SUCCESS,
        payload
    };
}

export function getRelatedProductsError ( payload: any): IRelatedProductsAction {
    return {
        type: RELATED_PRODUCTS_FAILURE,
        payload
    };
}

export function getRelatedProductsLoading ( ): IRelatedProductsActionLoader {
    return {
        type: RELATED_PRODUCTS,
     
    };
}

export function getRelatedProductsAxios(payload:any): relatedProductsThunkAction<Promise<void>> {

    return (dispatch, getState) => (
        new Promise((resolve) => {
            const apiRelatedProducts = globalIntl()?.formatMessage(
                { id: 'API_RELATED_PRODUCTS' },
            )
            axios.get(API + apiRelatedProducts + payload)
                .then((response) => {
                    dispatch(getRelatedProducts(response?.data));
                    resolve()
                })
                .catch((error) => {
                    dispatch(getRelatedProductsError(error));

                })
        }));
}

