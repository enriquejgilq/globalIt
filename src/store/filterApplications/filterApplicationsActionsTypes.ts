import { AppAction } from '~/store/types';


export const YEARS_APPLICATIONS = 'YEARS_APPLICATIONS';
export const YEARS_APPLICATIONS_SUCCESS = 'YEARS_APPLICATIONS_SUCCESS';
export const YEARS_APPLICATIONS_FAILURE = 'YEARS_APPLICATIONS_FAILURE';

export const MAKE_APPLICATIONS = 'MAKE_APPLICATIONS';
export const MAKE_APPLICATIONS_SUCCESS = 'MAKE_APPLICATIONS_SUCCESS';
export const MAKE_APPLICATIONS_FAILURE = 'MAKE_APPLICATIONS_FAILURE';

export const MODEL_APPLICATIONS = 'MODEL_APPLICATIONS';
export const MODEL_APPLICATIONS_SUCCESS = 'MODEL_APPLICATIONS_SUCCESS';
export const MODEL_APPLICATIONS_FAILURE = 'MODEL_APPLICATIONS_FAILURE';

export const ENGINE_APPLICATIONS = 'ENGINE_APPLICATIONS';
export const ENGINE_APPLICATIONS_SUCCESS = 'ENGINE_APPLICATIONS_SUCCESS';
export const ENGINE_APPLICATIONS_FAILURE = 'ENGINE_APPLICATIONS_FAILURE';



export interface IFilterApplicationsAction {
    type: string;
    payload: any
}

export interface IFilterAplicationsActionLoader {
    type: string;
}

export type FilterApplicationsAction = 
Promise<IFilterApplicationsAction> |
IFilterAplicationsActionLoader; 

export type filterApplicationsThunkAction<T = void> = AppAction<IFilterApplicationsAction, T>;