import { ICategories } from "./detailCategories";

export interface IFeaturedCategories {
    count: number,
    next: string,
    previous: string,
    results: Array<ICategories>;
    error: string;
    loading: boolean;
}