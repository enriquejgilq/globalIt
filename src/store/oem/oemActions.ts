import axios from 'axios';
import { API } from '~/api/constantsApi';
import { globalIntl } from '~/services/i18n/global-intl';

import {
    OEM,
    OEM_SUCCESS,
    OEM_FAILURE,
    oemThunkAction,
    IOemAction,
    IOemActionLoader,
} from '~/store/oem/oemActionTypes';
export function getOem(payload: any): IOemAction {
    return {
        type: OEM_SUCCESS,
        payload
    };
}

export function getOemError ( payload: any): IOemAction {
    return {
        type: OEM_FAILURE,
        payload
    };
}

export function getOemLoading ( ): IOemActionLoader {
    return {
        type: OEM,
     
    };
}

export function getoOem(payload:any): oemThunkAction<Promise<void>> {

    return (dispatch, getState) => (
        new Promise((resolve) => {
            const state = getState()

            const apiOems = globalIntl()?.formatMessage(
                { id: 'API_OEM' },
            )
            axios.get(API + apiOems + payload,{
                    headers: {
                        Authorization: 'Token ' + state.login.access_token 
                    }
                }).then((response) => {
                  dispatch(getOem(response.data));
                    resolve()
                })
                .catch((error) => {
                   dispatch(getOemError(error ? error.response.data : 'Algo salio mal'));
                })
        }));
}

