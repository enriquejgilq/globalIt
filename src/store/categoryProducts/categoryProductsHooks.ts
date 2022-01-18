
import { useAppAction, useAppSelector } from '~/store/hooks';
import {CATEGORY_PRODUCTS_NAMESPACE} from '~/store/categoryProducts/categoryProductsReducers'


export const getCategoryProducts = () => useAppSelector((state) => state[CATEGORY_PRODUCTS_NAMESPACE]);