import axios from 'axios';
import { API } from '~/api/constantsApi';
import { globalIntl } from '~/services/i18n/global-intl';
import { 
    APPLICATIONS,
    APPLICATIONS_SUCCESS,
    APPLICATIONS_FAILURE,
    applicationsThunkAction,
    IApplicationsAction,
    IAplicationsActionLoader,
} from '~/store/applications/applicationsActionsTypes';

export function getApplications(payload: any): IApplicationsAction {
    return {
        type: APPLICATIONS_SUCCESS,
        payload
    };
}
export function getApplicationsError ( payload: any): IApplicationsAction {
    return {
        type: APPLICATIONS_FAILURE,
        payload
    };
}
export function getApplicationsLoader ( ): IAplicationsActionLoader {
    return {
        type: APPLICATIONS,
     
    };
}

export function getApplicationsAxios(payload:any): applicationsThunkAction<Promise<void>> {

    return (dispatch, getState) => (
        new Promise((resolve) => {
            const state = getState()

            const apiApplications = globalIntl()?.formatMessage(
                { id: 'API_APPLICATIONS' },
            )
            axios.get(API + apiApplications + payload+'/',{
                    headers: {
                        Authorization: 'Token ' + state.login.access_token 
                    }
                }).then((response) => {
                  dispatch(getApplications(response.data));
                    resolve()
                })
                .catch((error) => {
                   dispatch(getApplicationsError(error ? error.response.data : 'Algo salio mal'));
                })
        }));
}