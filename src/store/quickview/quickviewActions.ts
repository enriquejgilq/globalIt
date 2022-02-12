// application
import { IProduct } from '~/interfaces/product';
import {IProductFeatured } from '~/interfaces/productsFeatured'
import { shopApi } from '~/api';
import { API } from '~/api/constantsApi';
import { globalIntl } from '~/services/i18n/global-intl';

import {
    QUICKVIEW_CLOSE,
    QUICKVIEW_OPEN,
    QUICKVIEW_PRIVATE,
    QuickviewCloseAction,
    QuickviewOpenAction,
    QuickviewThunkAction,
    QuickviewOpenActionFe,
    QuickviewOpenActionPrivate,
    QUICKVIEW_PRIVATE_SUCCESS
} from '~/store/quickview/quickviewActionTypes';
import axios from 'axios';

let cancelPreviousRequest = () => {};

export function quickviewOpenSuccess(product: any, open:boolean): QuickviewOpenAction {
    return {
        type: QUICKVIEW_OPEN,
        product,
        open 
    };
}

export function quickviewClose(): QuickviewCloseAction {
    return {
        type: QUICKVIEW_CLOSE,
    };
}

export function quickviewOpenSuccessPrivate(product:any,open:boolean) : QuickviewOpenActionPrivate {
    return {
        type: QUICKVIEW_PRIVATE_SUCCESS,
        product,
        open
    };
}




export function quickviewOpen(productSlug: string, open:boolean): QuickviewThunkAction<Promise<void>> {
    return (dispatch) => {
        cancelPreviousRequest();

        return new Promise((resolve) => {
            let canceled = false;
            // sending request to server, timeout is used as a stub
            const timer = setTimeout(() => {
                const apiDetails = globalIntl()?.formatMessage(
                    { id: 'API_GET_PRODUCTS_BY_CODE' },
                )
                axios.get(API + apiDetails+productSlug.toLowerCase()  )
                .then((response) => {
                    dispatch(quickviewOpenSuccess(response?.data, open));
                    console.log(response.data)
                    resolve()
                })
                .catch((error) => {
                    console.log(error)
                  //  dispatch(getCategoriesError(error));
                })
              
             //   dispatch(quickviewOpenSuccess(productSlug));
             /*  
                shopApi.getProductBySlug(productSlug).then((product) => {
                    if (canceled) {
                        return;
                    }

                    if (product) {
                        dispatch(quickviewOpenSuccess(product));
                    }
                    resolve();
                });/**/
            }, 250);

            cancelPreviousRequest = () => {
                canceled = true;
                clearTimeout(timer);
                resolve();
            };
        });
    };
}
export function quickviewOpenPrivate(productSlug: string, open:boolean): QuickviewThunkAction<Promise<void>> {
    return (dispatch,getState) => {
        cancelPreviousRequest();

        return new Promise((resolve) => {
            let canceled = false;
            // sending request to server, timeout is used as a stub
            const timer = setTimeout(() => {
                const state = getState()

                const apiDetailsPrivate = globalIntl()?.formatMessage(
                    { id: 'API_GET_PRODUCTS_BY_CODE_PRIVATE' },
                )
                axios.get(API + apiDetailsPrivate+productSlug.toLowerCase(), {
                    headers: {
                        Authorization: 'Token ' + state.login.access_token 
                    }
                }).then((response) => {
                    dispatch(quickviewOpenSuccessPrivate(response.data, open));
                    resolve()
                }
                )
               
             //   dispatch(quickviewOpenSuccess(productSlug));
             /*  
                shopApi.getProductBySlug(productSlug).then((product) => {
                    if (canceled) {
                        return;
                    }

                    if (product) {
                        dispatch(quickviewOpenSuccess(product));
                    }
                    resolve();
                });/**/
            }, 250);

            cancelPreviousRequest = () => {
                canceled = true;
                clearTimeout(timer);
                resolve();
            };
        });
    };
}
