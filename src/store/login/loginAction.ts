import axios from 'axios';
import { API } from '~/api/constantsApi';
import { ILogin } from '~/interfaces/login';
import { globalIntl } from '~/services/i18n/global-intl';
import {
    FETCH_LOGIN,
    ERROR_LOGIN,
    LOADING_LOGIN,
    LOGOUT,
    LoginAction,
    loginThunkAction,
    ILoginAction
} from '~/store/login/loginActionTypes'

export function fetchLogin(payload: ILogin): ILoginAction {
    return {
        type: FETCH_LOGIN,
        payload
    };
}


export function fetchLoginError(payload: ILogin): ILoginAction {
    return {
        type: ERROR_LOGIN,
        payload
    };
}


export function fetchLoginLoading(payload: ILogin): ILoginAction {
    return {
        type: LOADING_LOGIN,
        payload
    };
}


export function postLogin(payload: any): loginThunkAction<Promise<void>> {
    return (dispatch) => (
        new Promise((resolve) => {
            const apiLogin = globalIntl()?.formatMessage(
                { id: 'API_LOGIN' },
            )
            dispatch(fetchLoginLoading(payload))
            axios({
                method: 'POST',
                url: API + apiLogin,
                data: payload
            }).then((response) => {
                dispatch(fetchLogin(response.data))  
            }).catch((error) => {
                dispatch(fetchLoginError(error.response.data))
                    throw error.response?.data;
                });
        }));
}

export function logout(): LoginAction {
    return {
        type: LOGOUT,
    };
}