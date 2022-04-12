// react
import React, { useEffect, useState } from 'react';
// third-party
import { useRouter } from 'next/router';
// application
import ShopPageOrderSuccess from '~/components/shop/ShopPageOrderSuccess';
import { accountApi } from '~/api';
import { IOrder } from '~/interfaces/order';
import { quotesState } from '~/store/quotes/quotesHooks';
import { hrefToRouterArgs } from '~/services/router';
import url from '~/services/url';

function Page() {
    const router = useRouter();
    const [order, setOrder] = useState<IOrder | null>(null);
    const { token } = router.query;
    const quotes = quotesState();
    async function onrute() {
        await router.push(...hrefToRouterArgs(url.home()));
    }
   //quotes.results_create).length === 0) {
     //   onrute()
   // }
    /*   useEffect(() => {
           let canceled = false;
   
           if ((typeof token === 'string')) {
               accountApi.getOrderByToken(token).then((result) => {
                   if (canceled) {
                       return;
                   }
   
                   setOrder(result);
               });
           } else {
               setOrder(null);
           }
   
           return () => {
               canceled = true;
           };
       }, [token]);
   
       if (!order) {
           return null;
       }/*/

    return <ShopPageOrderSuccess order={quotes} />;
}

export default Page;
