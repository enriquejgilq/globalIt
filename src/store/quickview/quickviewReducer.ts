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

const initialState: any = {
    open: false,
    product: null,
    //  productFeatured: {},
};

export const QUICKVIEW_NAMESPACE = 'quickview';


const quickviewReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case QUICKVIEW_OPEN:
            return {
                ...state,
                open: true,
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
                open: false,
                product: null,
            }
        case QUICKVIEW_PRIVATE_SUCCESS:     
         return{
                ...state,
                open: true,
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
export default quickviewReducer;