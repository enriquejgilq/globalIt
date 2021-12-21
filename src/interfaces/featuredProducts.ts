import { IProduct } from "./product";

export interface IFeaturedProducts {
    count: number;
    next: string;
    previous: string;
    results: Array<IProduct>;
}


