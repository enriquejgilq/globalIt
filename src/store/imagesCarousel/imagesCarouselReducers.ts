import { GET_IMAGES_CAROUSEL, 
    GET_IMAGES_CAROUSEL_SUCCESS, 
    GET_IMAGES_CAROUSEL_ERROR 
} from './imagesCarouselActionTypes';
import { withClientState } from '~/store/client';

const defaultState: any = {
    count: '',
    next: null,
    previous: null,
    results: [],
    error: false,
    loading: false

}
export const IMAGESCAROUSEL_NAMESPACE = 'imagescarousel';


function imagesCarousel(state = defaultState, action: any): any {
    switch (action.type) {
        case GET_IMAGES_CAROUSEL_SUCCESS:
            return {
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results,
                error: false,
                loading: false
            }
        case GET_IMAGES_CAROUSEL_ERROR:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: action.payload,
                loading: false
            }
        case GET_IMAGES_CAROUSEL:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: false,
                loading: true
            }
        default:
            return state;
    }
}

const imagesCarouselReducer = withClientState(imagesCarousel, IMAGESCAROUSEL_NAMESPACE);

export default imagesCarouselReducer;
