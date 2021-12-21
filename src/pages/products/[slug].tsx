// react
import React from 'react';
// third-party
import { GetServerSideProps } from 'next';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import { IProduct } from '~/interfaces/product';
import {IProductFeatured} from '~/interfaces/productsFeatured';
import { shopApi } from '~/api';
import SitePageNotFound from '~/components/site/SitePageNotFound';

interface Props {
  //  product: IProduct | null;
    productFeatured: IProductFeatured  | null;

}


export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    const slug = typeof params?.slug === 'string' ? params?.slug : null;

    return {
        props: {
            productFeatured: slug ? await shopApi.getProductBySlug(slug) : null,
        },
    };
};

function Page(props: Props) {
    const { productFeatured } = props;

    if (productFeatured === null) {
        return <SitePageNotFound />;
    }

    return (
        <ShopPageProduct
            product={productFeatured}
            layout="full"
        />
    );
}

export default Page;
