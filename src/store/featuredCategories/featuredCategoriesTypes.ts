import { IFeaturedCategories } from '~/interfaces/featuredCategories';

export interface IFeaturedCategoriesState {
    items: IFeaturedCategories[];
    current: any | null;
}
