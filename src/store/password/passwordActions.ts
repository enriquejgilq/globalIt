import axios from "axios";
import { API } from "~/api/constantsApi";
import { globalIntl } from "~/services/i18n/global-intl";
import {
    NEW_PASSWORD,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAILURE,
    passwordThunkAction,
    IPasswordAction,
    IPasswordActionLoader,
    IClearNewClearAction,
    CLEAR_NEW_PASSWORD
} from "~/store/password/passwordActionsTypes";

export function changePassword(payload: any): IPasswordAction {
    return {
        type: NEW_PASSWORD_SUCCESS,
        payload,
    };
}

export function changePasswordError(payload: any): IPasswordAction {
    return {
        type: NEW_PASSWORD_FAILURE,
        payload,
    };
}

export function changePasswordLoading(): IPasswordActionLoader {
    return {
        type: NEW_PASSWORD,
    };
}

export function changePasswordAxios(payload: any): passwordThunkAction<Promise<void>> {
    return (dispatch, getState) =>
        new Promise((resolve) => {
            const state = getState();
            const apichange = "users/change-password/";
            axios({
                method: 'POST',
                url: API + apichange,
                data: payload,
                headers: {
                    Authorization: 'Token ' + state.login.access_token 
                }
            }).then((response) => {
                dispatch(changePassword(response.data))  
            }).catch((error) => {
                dispatch(changePasswordError(error.response.data))
                    throw error.response?.data;
                })
            });
    }
    
    export function newPasswordClear ():IClearNewClearAction{ 
        return {
            type: CLEAR_NEW_PASSWORD,
        };
    }