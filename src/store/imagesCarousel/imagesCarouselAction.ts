import axios from 'axios';
import { API } from '~/api/constantsApi';
import { globalIntl } from '~/services/i18n/global-intl';
import {
    GET_IMAGES_CAROUSEL,
    GET_IMAGES_CAROUSEL_SUCCESS,
    GET_IMAGES_CAROUSEL_ERROR,
    imagesCarouselThunkAction,
    IImageCarouselAction,
    IImageCarouselActionLoader

} from '~/store/imagesCarousel/imagesCarouselActionTypes'; 
export function getImagesSuccess(payload: any): IImageCarouselAction {
    return {
        type: GET_IMAGES_CAROUSEL_SUCCESS,
        payload
    };
}
export function getImagesError ( payload: any): IImageCarouselAction {
    return {
        type: GET_IMAGES_CAROUSEL_ERROR,
        payload
    };
}
export function getImageLoading ( ): IImageCarouselActionLoader {
    return {
        type: GET_IMAGES_CAROUSEL,
    };
}
export function getImages(payload:any): imagesCarouselThunkAction<Promise<void>> {
    return (dispatch) => (
        new Promise((resolve) => {
            
            const apiImages = globalIntl()?.formatMessage(
                { id: 'API_IMAGES_CAROUSEL' },
            )

            axios.get(API+apiImages+payload )
                .then((response) => {
                  dispatch(getImagesSuccess(response.data));
                    resolve()
                })
                .catch((error) => {
                   dispatch(getImagesError(error ? error.response.data : 'Algo salio mal'));
                })
        }));
}
