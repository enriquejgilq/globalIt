import {ILogin} from '~/interfaces/login';
import { AppAction } from '~/store/types';


export const FETCH_LOGIN = 'FETCH_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const LOADING_LOGIN = 'LOADING_LOGIN'

export const  LOGOUT = 'LOGOUT';

export interface ILoginAction {
    type: string;
    payload: ILogin
}

export interface ILogoutAction {
    type: string;
}
export type LoginAction =
 Promise<ILoginAction>| 
 ILogoutAction; 

export type loginThunkAction<T = void> = AppAction<ILoginAction, T>;
