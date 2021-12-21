import axios from 'axios';
import { API } from '~/api/constantsApi';
import { IFeaturedProducts } from '~/interfaces/featuredProducts';
import { globalIntl } from '~/services/i18n/global-intl';
import {
    FETCH_FEATURED_PRODUCTS,
    FeaturedProductsThunkAction,
    IFeaturedProductsAction,
    FeaturedProducts
} from '~/store/featuredProducts/featuredProductsActionTypes';

export function fetchListProductSuccess(payload: IFeaturedProducts): IFeaturedProductsAction {
    return {
        type: FETCH_FEATURED_PRODUCTS,
        payload,
    };
}

export function getListProducts(page: number = 1): FeaturedProductsThunkAction<Promise<void>> {
    return (dispatch) => (
        new Promise((resolve) => {
            const apiEvaporators = globalIntl()?.formatMessage(
                { id: 'API_EVAPORATORS' },
            )
            console.log(apiEvaporators)
            axios.get(API + apiEvaporators + '?page=' + page)
                .then((response) => {
                    console.log(response.data.results)
                    dispatch(fetchListProductSuccess(response.data.results));
                    resolve()
                })
                .catch((error) => {
                    console.log(error)
                })
        }));
}

