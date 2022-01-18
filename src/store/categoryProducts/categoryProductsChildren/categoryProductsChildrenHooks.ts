
import { useAppAction, useAppSelector } from '~/store/hooks';
import {CATEGORY_PRODUCTS_CHILDREN_NAMESPACE} from '~/store/categoryProducts/categoryProductsChildren/categoryProductsChildrenReducers'


export const getCategoryProductsChildrenState = () => useAppSelector((state) => state[CATEGORY_PRODUCTS_CHILDREN_NAMESPACE]);