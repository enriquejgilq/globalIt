// application
import { IProduct } from '~/interfaces/product';
import {IProductFeatured } from '~/interfaces/productsFeatured'
import { shopApi } from '~/api';
import {
    QUICKVIEW_CLOSE,
    QUICKVIEW_OPEN,
    QuickviewCloseAction,
    QuickviewOpenAction,
    QuickviewThunkAction,
    QuickviewOpenActionFe
} from '~/store/quickview/quickviewActionTypes';
import axios from 'axios';

let cancelPreviousRequest = () => {};

export function quickviewOpenSuccess(product: IProduct): QuickviewOpenAction {
    return {
        type: QUICKVIEW_OPEN,
        product,
    };
}

export function quickviewClose(): QuickviewCloseAction {
    return {
        type: QUICKVIEW_CLOSE,
    };
}

export function quickviewOpenSuccessFe(productFeatured:IProductFeatured) : QuickviewOpenActionFe {
    return {
        type: QUICKVIEW_OPEN,
        productFeatured,
    };
}

export function quickviewOpen(productSlug: string): QuickviewThunkAction<Promise<void>> {
    return (dispatch) => {
        cancelPreviousRequest();

        return new Promise((resolve) => {
            let canceled = false;
            // sending request to server, timeout is used as a stub
            const timer = setTimeout(() => {
                //axios a get details of product
                console.log('get details of product from server for id:D ' + productSlug+ ' es el code(code de producto xd) xd ' );
            
               
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
