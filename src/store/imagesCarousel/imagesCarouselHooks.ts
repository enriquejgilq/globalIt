
import { useAppAction, useAppSelector } from '~/store/hooks';
import {IMAGESCAROUSEL_NAMESPACE} from './imagesCarouselReducers';


export const getImagesCarouselState = () => useAppSelector((state) => state[IMAGESCAROUSEL_NAMESPACE]);