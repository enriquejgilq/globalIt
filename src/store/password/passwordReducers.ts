import { NEW_PASSWORD, NEW_PASSWORD_SUCCESS, NEW_PASSWORD_FAILURE, CLEAR_NEW_PASSWORD } from "./passwordActionsTypes";

const defaultState: any = {
    results: [],
    error: false,
    loading: false,
};
export const NEW_PASSWORD_NAMESPACE = "newpassword";

const passwordReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case NEW_PASSWORD_SUCCESS:
            return {
                results: action.payload.results,
                error: false,
                loading: false,
            };
        case NEW_PASSWORD_FAILURE:
            return {
                ...state,
                results: [],
                error: action.payload,
                loading: false,
            };
        case NEW_PASSWORD:
            return {
                ...state,
                results: [],
                error: false,
                loading: true,
            };
        case CLEAR_NEW_PASSWORD:
            return {
                results: [],
                error: false,
                loading: false,
            };

        default:
            return state;
    }
};

export default passwordReducer;
