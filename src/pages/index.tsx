// react
import React, { useEffect, useMemo, useState, useRef } from 'react';
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
import { getFeaturedCategories, categoriesLoading, categoriesFilters } from '~/store/featuredCategories/featuredCategoriesActions';
import { getfeaturedProducts } from '~/store/featuredProducts/featuredProductsHooks';
import { getfeaturedCat } from '~/store/featuredCategories/featuredCategoriesHooks';
import { getCategories } from '~/fake-server/endpoints';


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
    const [state, setState] = useState([{}])
    const nameCategories: any = globalIntl()?.formatMessage(
        { id: 'SLUG_NAME' },
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
            { id: 1, name: 'All', categorySlug: null },
            { id: 2, name: 'power-tools', categorySlug: 'power-tools' },
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

    const newData = () => {
        setState([])
        const value = window.localStorage.storage.getItem('allCategories');
        featured?.map((item: any, index: any) => {
            const resultado = getfeaturedCate.results.find((id: any) => id[nameCategories] === value);
            //  setfilterscategoryId(resultado?.id)
            if (item.category === resultado?.id) {
                setState(prevState => [...prevState, item])
            }
            if (state.length > 1 || getfeaturedCate.filters !== undefined) {
                dispatch(categoriesFilters(state))
            }
        })

    }
   
    const namecategoriesIdioma = getfeaturedCate.results.map((item: any) => item[nameCategories])

    const setFilterType = (data: any) => {
        const resultado = getfeaturedCate.results.find((id: any) => id[nameCategories] === data);
        const productList = data === 'all' ? featured : featured?.filter((item: any) => item.category === resultado?.id);

        if (productList.length > 1) {
            setState(productList);
            dispatch(categoriesFilters(productList));
        }
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
                productFeatured={getfeaturedCate.filters?.length == 0 || getfeaturedCate.filters == undefined ? featured : getfeaturedCate.filters}
                currentGroup={featuredProducts.tabs.find((x) => x.current)}
                onChangeGroup={featuredProducts.handleTabChange}
                localStorage={newData}
                namecategoriesIdioma={namecategoriesIdioma}
                state={state}
                setFilterType={setFilterType}
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
                state={state}
                //
                namecategoriesIdioma={namecategoriesIdioma}
                productFeatured={state.length === 0 ? featured : ''}
                setFilterType={setFilterType}
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
