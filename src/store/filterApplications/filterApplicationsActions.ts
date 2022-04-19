import axios from "axios";
import { API } from "~/api/constantsApi";
import { globalIntl } from "~/services/i18n/global-intl";
import {
    //constants
    YEARS_APPLICATIONS,
    YEARS_APPLICATIONS_SUCCESS,
    YEARS_APPLICATIONS_FAILURE,
    MAKE_APPLICATIONS,
    MAKE_APPLICATIONS_SUCCESS,
    MAKE_APPLICATIONS_FAILURE,
    MODEL_APPLICATIONS,
    MODEL_APPLICATIONS_SUCCESS,
    MODEL_APPLICATIONS_FAILURE,
    ENGINE_APPLICATIONS,
    ENGINE_APPLICATIONS_SUCCESS,
    ENGINE_APPLICATIONS_FAILURE,
    //actions
    filterApplicationsThunkAction,
    IFilterApplicationsAction,
    IFilterAplicationsActionLoader,
} from "~/store/filterApplications/filterApplicationsActionsTypes";
//function to get the years of the applications
export function getFilterYears(payload: any): IFilterApplicationsAction {
    return {
        type: YEARS_APPLICATIONS_SUCCESS,
        payload,
    };
}
export function getFilterYearsError(payload: any): IFilterApplicationsAction {
    return {
        type: YEARS_APPLICATIONS_FAILURE,
        payload,
    };
}
export function getFilterYearsLoader(): IFilterAplicationsActionLoader {
    return {
        type: YEARS_APPLICATIONS,
    };
}

export function getFilterYearsAxios(): filterApplicationsThunkAction<Promise<void>> {
    return (dispatch) =>
        new Promise((resolve) => {
            axios
                .get(API + "inventory/public-years-applications/")
                .then((response) => {
                    dispatch(getFilterYears(response?.data));
                    resolve();
                })
                .catch((error) => {
                    dispatch(getFilterYearsError(error));
                });
        });
}
//function to get the makes of the applications

export function getFilterMake(payload: any): IFilterApplicationsAction {
    return {
        type: MAKE_APPLICATIONS_SUCCESS,
        payload,
    };
}
export function getFilterMakeError(payload: any): IFilterApplicationsAction {
    return {
        type: MAKE_APPLICATIONS_FAILURE,
        payload,
    };
}
export function getFilterMakeLoader(): IFilterAplicationsActionLoader {
    return {
        type: MAKE_APPLICATIONS,
    };
}

export function getFilterMakeAxios(payload:any): filterApplicationsThunkAction<Promise<void>> {
    return (dispatch) =>
        new Promise((resolve) => {
            axios
                .get(API + "inventory/public-make-applications/" + payload+"/")
                .then((response) => {
                    dispatch(getFilterMake(response?.data));
                    resolve();
                })
                .catch((error) => {
                    dispatch(getFilterMakeError(error));
                });
        });
}