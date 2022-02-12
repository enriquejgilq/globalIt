// react
import React from 'react';
import { useIntl } from 'react-intl';

// third-party
import { GetServerSideProps } from 'next';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import { IProduct } from '~/interfaces/product';
import {IProductFeatured} from '~/interfaces/productsFeatured';
import { shopApi } from '~/api';
import SitePageNotFound from '~/components/site/SitePageNotFound';
import { useQuickview, useQuickviewClose } from '~/store/quickview/quickviewHooks';


interface Props {
    product: any | null;
    productFeatured: any  | null;

}
//export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  //  const slug = typeof params?.slug === 'string' ? params?.slug : null;

 //   return {
   //     props: {
    //        product: slug ? await shopApi.getProductBySlug(slug) : null,
    //    },
    //};
//};
function Page(props: Props) {
    const details = useQuickview();
    const intl = useIntl();
    const { productFeatured,product } = props;
    console.log(details)
   if(details.stateFrom ==="server"){
       return( <p>{intl.formatMessage({ id: 'LOADING_TEXT' })}.</p>)
   }
    if (details.product === null) {
        return <SitePageNotFound />;
    }
 
    return (
         <ShopPageProduct
            product={details.product}
            layout="full"
        />
    );
}

export default Page;
