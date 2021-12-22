// react
import React from 'react';
// application
import ProductCard from '~/components/shared/ProductCard';
import { IProduct } from '~/interfaces/product';
import { IProductFeatured } from '~/interfaces/productsFeatured';

export interface IBlockProductsColumnsItem {
    title: string;
    products: IProduct[];
    productFeatured: IProductFeatured[];
}

interface Props {
    columns: IBlockProductsColumnsItem[];
}

function BlockProductsColumns(props: Props) {
    const { columns } = props;

    return (
        <div className="block block-products-columns">
            <div className="container">
                <div className="row">
                    {columns.map((column, columnIdx) => (
                        <div key={columnIdx} className="col-4">
                            <div className="block-products-columns__title">{column.title}</div>
                            <div className="block-products-columns__list">
                                {column.productFeatured.map((product) => (
                                    <div key={product.id} className="block-products-columns__list-item">
                                        <ProductCard
                                            productFeatured={product}
                                            exclude={['actions', 'status-badge', 'features', 'buttons', 'meta']}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default React.memo(BlockProductsColumns);
