
import { useAppAction, useAppSelector } from '~/store/hooks';
import { FEATUREPRODUCT_NAMESPACE } from '~/store/featuredProducts/featuredProductsReducers';

export const getfeaturedProducts = () => useAppSelector((state) => state[FEATUREPRODUCT_NAMESPACE]);
