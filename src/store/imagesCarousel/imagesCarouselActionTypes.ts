import { AppAction } from '~/store/types';


export const GET_IMAGES_CAROUSEL = 'GET_IMAGES_CAROUSEL';
export const GET_IMAGES_CAROUSEL_SUCCESS = 'GET_IMAGES_CAROUSEL_SUCCESS';
export const GET_IMAGES_CAROUSEL_ERROR = 'GET_IMAGES_CAROUSEL_ERROR';

export interface IImageCarouselAction {
    type: string;
    payload: any
}
export interface IImageCarouselActionLoader {
    type: string;
}

export type ImageCarouselAction = 
Promise<IImageCarouselAction>|
IImageCarouselActionLoader;

export type imagesCarouselThunkAction<T = void> = AppAction<IImageCarouselAction, T>;