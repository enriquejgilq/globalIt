
import { useAppAction, useAppSelector } from '~/store/hooks';
import {CATALOG_PRODUCTS_NAMESPACE} from '~/store/catalogProducts/catalogProductsReducers';


export const getCatalogProductsState = () => useAppSelector((state) => state[CATALOG_PRODUCTS_NAMESPACE]);