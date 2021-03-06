import axios from 'axios';
import { API } from '~/api/constantsApi';
import { IFeaturedCategories } from '~/interfaces/featuredCategories';
import { globalIntl } from '~/services/i18n/global-intl';
import {
    GET_CATERGORIES_FAILURE,
    GET_CATERGORIES_SUCCESS,
    GET_CATERGORIES,
    GET_CATEGORY_FILTER,
    categorieshunkAction,
    ICategoriesAction,
    ICategoriesActionLoading,
    ICategoriesActionFilters,
} from '~/store/featuredCategories/featuredCategoriesActionsTypes';


export function getCategories(payload: IFeaturedCategories): ICategoriesAction {
    return {
        type: GET_CATERGORIES_SUCCESS,
        payload
    };
}


export function getCategoriesError(payload: IFeaturedCategories): ICategoriesAction {
    return {
        type: GET_CATERGORIES_FAILURE,
        payload
    };
}


export function categoriesLoading(): ICategoriesActionLoading {
    return {
        type: GET_CATERGORIES,
    };
}
export function categoriesFilters(payload: any): ICategoriesActionFilters {
    return {
        type: GET_CATEGORY_FILTER,
        payload
    };
}


export function getFeaturedCategories(): categorieshunkAction<Promise<void>> {
    return (dispatch) => (
        new Promise((resolve) => {
            const apiCategories = globalIntl()?.formatMessage(
                { id: 'API_GET_CATEGORIES' },
            )
            axios.get(API + apiCategories )
                .then((response) => {
                    dispatch(getCategories(response?.data));
                    resolve()
                })
                .catch((error) => {
                    dispatch(getCategoriesError(error));

                })
        }));
}