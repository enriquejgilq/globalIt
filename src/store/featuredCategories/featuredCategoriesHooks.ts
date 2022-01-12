
import { useAppAction, useAppSelector } from '~/store/hooks';
import { FEATUREDCATEGORIES_NAMESPACE } from '~/store/featuredCategories/featuredCategoriesReducers';

export const getfeaturedCat = () => useAppSelector((state) => state[FEATUREDCATEGORIES_NAMESPACE]);