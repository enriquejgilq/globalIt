// react
import React, { useEffect, useMemo } from 'react';
// third-party
import { useIntl } from 'react-intl';
// application
import { globalIntl } from '~/services/i18n/global-intl';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import publicIp from 'public-ip';
import BlockBanners from '~/components/blocks/BlockBanners';
import BlockBrands from '~/components/blocks/BlockBrands';
import BlockFeatures from '~/components/blocks/BlockFeatures';
import BlockFinder from '~/components/blocks/BlockFinder';
import BlockPosts from '~/components/blocks/BlockPosts';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockProductsColumns from '~/components/blocks/BlockProductsColumns';
import BlockSale from '~/components/blocks/BlockSale';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockZone from '~/components/blocks/BlockZone';
import url from '~/services/url';
import { shopApi, blogApi } from '~/api';
import { useDeferredData, useProductColumns, useProductTabs } from '~/services/hooks';

import { getListProducts } from '~/store/featuredProducts/featuredProductsActions';
import {getFeaturedCategories,categoriesLoading} from '~/store/featuredCategories/featuredCategoriesActions';
import { getfeaturedProducts } from '~/store/featuredProducts/featuredProductsHooks';
import { getfeaturedCat } from '~/store/featuredCategories/featuredCategoriesHooks';


const MacAddress = require('get-mac-address');

function Page() {
async function asyncCall() {
   // console.log('calling');
    const result = await publicIp.v4();
  // console.log(result);
    // expected output: "resolved"
  }
  asyncCall();   
    const intl = useIntl();
    const dispatch = useDispatch()
    const featured = getfeaturedProducts();
    const getfeaturedCate = getfeaturedCat();
    const nameCategories:any = globalIntl()?.formatMessage(
        { id: 'SLUG_CATEGORY_NAME' },
    );

    /**
     * Featured products.
     */
     useEffect(() => {
        dispatch(getListProducts())
        dispatch(categoriesLoading())
        dispatch(getFeaturedCategories())
    }, [])
 
 
    const featuredProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'All' , categorySlug: null },
            { id: 2, name:  'power-tools', categorySlug: 'power-tools' },
            { id: 3, name: 'hand-tools', categorySlug: 'hand-tools' },
            { id: 4, name: 'plumbing', categorySlug: 'plumbing' },
        ], []),
        (tab) => shopApi.getFeaturedProducts(tab.categorySlug, 8),
    );
    //const featuredProducts = useProduct

    const blockSale = useDeferredData(() => shopApi.getSpecialOffers(8), []);

    const blockZones = useMemo(() => [
        {
            image: '/images/categories/category-overlay-1.jpg',
            mobileImage: '/images/categories/category-overlay-1-mobile.jpg',
            categorySlug: 'tires-wheels',
        },
        {
            image: '/images/categories/category-overlay-2.jpg',
            mobileImage: '/images/categories/category-overlay-2-mobile.jpg',
            categorySlug: 'interior-parts',
        },
        {
            image: '/images/categories/category-overlay-3.jpg',
            mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
            categorySlug: 'engine-drivetrain',
        },
    ], []);

    const newArrivals = useDeferredData(() => shopApi.getLatestProducts(12), []);
    const newArrivalsLinks = useMemo(() => [
        { title: 'Wheel Covers', url: url.products() },
        { title: 'Timing Belts', url: url.products() },
        { title: 'Oil Pans', url: url.products() },
        { title: 'Show All', url: url.products() },
    ], []);

    const latestPosts = useDeferredData(() => blogApi.getLatestPosts(8), []);
    const latestPostsLinks = useMemo(() => [
        { title: 'Special Offers', url: url.blog() },
        { title: 'New Arrivals', url: url.blog() },
        { title: 'Reviews', url: url.blog() },
    ], []);

    const brands = useDeferredData(() => shopApi.getBrands({ limit: 16 }), []);

    /**
     * Product columns.
     */
    const columns = useProductColumns(
        useMemo(() => [
            {
                title: 'Top Rated Products',
                source: () => shopApi.getTopRatedProducts(null, 3),
            },
            {
                title: 'Special Offers',
                source: () => shopApi.getSpecialOffers(3),
            },
            {
                title: 'Bestsellers',
                source: () => shopApi.getPopularProducts(null, 3),
            },
        ], []),
    );

   

    const hola = () => {
     
        (async () => {   
            await navigator.mediaDevices.getUserMedia({audio: true, video: true});   
            let devices = await navigator.mediaDevices.enumerateDevices();   
            console.log(devices); 
          })();

        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
          console.log("enumerateDevices() not supported.");
          //  return;
        }

        // List cameras and microphones.
        navigator.mediaDevices.enumerateDevices()
            .then(function (devices) {
                devices.forEach(function (device) {
                    console.log(device.kind + ": " + device.label +
                        " id = " + device.deviceId    
                        );
                });
            })
            .catch(function (err) {
                console.log(err.name + ": " + err.message);
            });
    }


    const hola2 =()=> {
        var Sys:any = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

   
        if (Sys.ie) console.log('IE: ' + Sys.ie);
        if (Sys.firefox)console.log('Firefox: ' + Sys.firefox);
        if (Sys.chrome) console.log('Chrome: ' + Sys.chrome);
        if (Sys.opera) console.log('Opera: ' + Sys.opera);
        if (Sys.safari) console.log('Safari: ' + Sys.safari);
    }

    const chao = () => {
        var navigator_info = window.navigator;
        var screen_info = window.screen;
        var uid: any = navigator_info.mimeTypes.length;
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';
        
        
        console.log(uid);


        console.log( 'nav',navigator_info )
    }

    //.platform,'screen',navigator_info.platform,
    //navigator_info.deviceMemory

    const localStorage = () => {
        var storage:any = window.localStorage;
        storage.setItem('key', Math.random());
        var value = storage.getItem('key');
        console.log(value);
    }

   
    return (
        <React.Fragment>
            <BlockFinder />
            <BlockFeatures layout="top-strip" />
            <BlockSpace layout="divider-nl" />
            <BlockProductsCarousel
                blockTitle={intl.formatMessage({ id: 'HEADER_FEATURED_PRODUCTS' })}
                layout="grid-5"
                loading={featuredProducts.isLoading}
                products={featuredProducts.data}
                groups={featuredProducts.tabs}
                productFeatured={featured}
                currentGroup={featuredProducts.tabs.find((x) => x.current)}
                onChangeGroup={featuredProducts.handleTabChange}
            />
            <BlockSpace layout="divider-nl" />
            {/**   <BlockSale
                products={blockSale.data}
                loading={blockSale.isLoading}
            />*/}
            <BlockSpace layout="divider-lg" />

            {blockZones.map((blockZone, blockZoneIdx) => (
                <React.Fragment key={blockZoneIdx}>
                    <BlockZone
                        image={blockZone.image}
                        mobileImage={blockZone.mobileImage}
                        categorySlug={blockZone.categorySlug}
                    />
                    {blockZoneIdx < blockZones.length - 1 && (
                        <BlockSpace layout="divider-sm" />
                    )}
                </React.Fragment>
            ))}

            <BlockSpace layout="divider-nl" />
            <BlockBanners />
            <BlockSpace layout="divider-nl" />
            <BlockProductsCarousel
                blockTitle={intl.formatMessage({ id: 'HEADER_NEW_ARRIVALS' })}
                layout="horizontal"
                rows={2}
                loading={newArrivals.isLoading}
                products={newArrivals.data}
                links={newArrivalsLinks}
                productFeatured={featured}
            />
            <BlockSpace layout="divider-nl" />
            <BlockPosts
                blockTitle={intl.formatMessage({ id: 'HEADER_LATEST_NEWS' })}
                layout="grid"
                loading={latestPosts.isLoading}
                posts={latestPosts.data}
                links={latestPostsLinks}
            />
            <BlockSpace layout="divider-nl" />
            <BlockBrands
                layout="columns-8-full"
                brands={brands.data}
            />
            <BlockSpace layout="divider-nl" className="d-xl-block d-none" />
            {/**    <BlockProductsColumns columns={columns} />*/}
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
