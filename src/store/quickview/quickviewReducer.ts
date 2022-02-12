// application
import { IQuickviewState } from '~/store/quickview/quickviewTypes';
import {
    QUICKVIEW_CLOSE,
    QUICKVIEW_OPEN,
    QuickviewAction,
    QuickviewOpenActionFe,
    QUICKVIEW_PRIVATE,
    QUICKVIEW_PRIVATE_SUCCESS,
    QUICKVIEW_PRIVATE_FAILURE
} from '~/store/quickview/quickviewActionTypes';
import { withClientState } from '~/store/client';

const initialState: any = {
    open: false,
    product: null,
    //  productFeatured: {},
};

export const QUICKVIEW_NAMESPACE = 'quickview';

function quickviewDetails(state = initialState, action: any): any {

    switch (action.type) {
        case QUICKVIEW_OPEN:
            return {
                ...state,
                open: action.open,
                product: action.product,
            }
        case QUICKVIEW_CLOSE:
            return {
                ...state,
                open: false,
            }
        case QUICKVIEW_PRIVATE:
            return {
                ...state,
                open: action.open,
                product: null,
            }
        case QUICKVIEW_PRIVATE_SUCCESS:     
         return{
                ...state,
                open: action.open,
                product: action.product,
         }   
        case QUICKVIEW_PRIVATE_FAILURE:
            return {
                ...state,
                open: false,
            }
        default:
            return state;
    }
}
const quickviewReducer = withClientState(quickviewDetails, QUICKVIEW_NAMESPACE);

export default quickviewReducer;