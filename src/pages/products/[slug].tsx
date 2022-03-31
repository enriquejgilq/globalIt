// react
import React, {useEffect, useState} from 'react';
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
import { useQuickviewOpen, useQuickviewOpenPrivate } from '~/store/quickview/quickviewHooks';
import {  isAuth } from '~/store/login/loginHooks'

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
    const is_auth = isAuth()
    const { productFeatured,product } = props;
    const [code, setCode] = useState<any>('')
    const quickviewOpen = useQuickviewOpen();
    const quickviewOpenPrivate = useQuickviewOpenPrivate();
    if(details.stateFrom ==="server"){
       return( <p>{intl.formatMessage({ id: 'LOADING_TEXT' })}.</p>)
   }
    if (details.product === null) {
        return <SitePageNotFound />;
    }

  // let atras = window.history.back();
   
    //is_auth ? quickviewOpenPrivate(e, false) : quickviewOpen(e, false)
  
    return (
         <ShopPageProduct
            product={details.product}
            layout="full"
        />
    );
}

export default Page;
