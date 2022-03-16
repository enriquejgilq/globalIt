
import { useAppAction, useAppSelector } from '~/store/hooks';
import { RELATED_PRODUCTS_NAMESPACE} from '~/store/relatedProducts/relatedProductsReducers';


export const relatedProductsState = () => useAppSelector((state) => state[RELATED_PRODUCTS_NAMESPACE]);