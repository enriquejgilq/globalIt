// application
import { IProduct } from '~/interfaces/product';
import { IProductFeatured } from '~/interfaces/productsFeatured';

export interface IQuickviewState {
    open: boolean;
    product: IProduct | null;
    productFeatured: IProductFeatured | null;
}
