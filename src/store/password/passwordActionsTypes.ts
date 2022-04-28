import { AppAction } from '~/store/types';

export const NEW_PASSWORD = 'NEW_PASSWORD';
export const NEW_PASSWORD_SUCCESS = 'NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_FAILURE = 'NEW_PASSWORD_FAILURE';

export const CLEAR_NEW_PASSWORD = 'CLEAR_NEW_PASSWORD';

export interface IPasswordAction {
    type: string;
    payload: any
}

export interface IPasswordActionLoader {
    type: string;
}
export interface IClearNewClearAction {
    type: typeof CLEAR_NEW_PASSWORD;
}
export type PasswordAction = 
Promise<IPasswordAction> |
IPasswordActionLoader| 
IClearNewClearAction; 

export type passwordThunkAction<T = void> = AppAction<IPasswordAction, T>;