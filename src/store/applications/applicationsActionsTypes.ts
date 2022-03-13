import { AppAction } from '~/store/types';


export const APPLICATIONS = 'APPLICATIONS';
export const APPLICATIONS_SUCCESS = 'APPLICATIONS_SUCCESS';
export const APPLICATIONS_FAILURE = 'APPLICATIONS_FAILURE';


export interface IApplicationsAction {
    type: string;
    payload: any
}

export interface IAplicationsActionLoader {
    type: string;
}

export type ApplicationsAction = 
Promise<IApplicationsAction> |
IAplicationsActionLoader; 

export type applicationsThunkAction<T = void> = AppAction<IApplicationsAction, T>;