import { AppAction } from '~/store/types';


export const OEM = 'OEM';
export const OEM_SUCCESS = 'OEM_SUCCESS';
export const OEM_FAILURE = 'OEM_FAILURE';


export interface IOemAction {
    type: string;
    payload: any
}

export interface IOemActionLoader {
    type: string;
}

export type OemAction = 
Promise<IOemAction> |
IOemActionLoader; 

export type oemThunkAction<T = void> = AppAction<IOemAction, T>;