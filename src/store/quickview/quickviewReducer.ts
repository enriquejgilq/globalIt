// application
import { IQuickviewState } from '~/store/quickview/quickviewTypes';
import { QUICKVIEW_CLOSE, QUICKVIEW_OPEN, QuickviewAction, QuickviewOpenActionFe } from '~/store/quickview/quickviewActionTypes';

const initialState: IQuickviewState = {
    open: false,
    product: null,
    productFeatured: null,
};

export const QUICKVIEW_NAMESPACE = 'quickview';

export default function quickviewReducer(state = initialState, action: QuickviewOpenActionFe) {
    let newState = state;

    if (action.type === QUICKVIEW_OPEN) {
        newState = {
            ...state,
            open: true,
            productFeatured: JSON.parse(JSON.stringify(action.productFeatured)),
        };
    } else if (action.type === QUICKVIEW_CLOSE) {
        newState = {
            ...state,
            open: false,
        };
    }

    return newState;
}
