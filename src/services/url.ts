/* eslint-disable @typescript-eslint/no-unused-vars */

// application
import { IAddress } from '~/interfaces/address';
import { IAppLinkHref } from '~/components/shared/AppLink';
import { IBrand } from '~/interfaces/brand';
import { ICategory, IShopCategory } from '~/interfaces/category';
import { IOrder } from '~/interfaces/order';
import { IPost } from '~/interfaces/post';
import { IProduct } from '~/interfaces/product';
import { IProductFeatured } from '~/interfaces/productsFeatured';

const url = {
    // common
    home: () => '/',
    category: (category: ICategory): IAppLinkHref => {
        if (category.type === 'shop') {
            return url.shopCategory(category);
        }

        return '/';
    },

    // shop pages
    shop: () => '/catalog/products',
    shopCategory: (category: IShopCategory): IAppLinkHref => ({
        href: `/catalog/[slug]${category.layout === 'products' ? '/products' : ''}?slug=${category.slug}`,
        as: `/catalog/${category.slug}${category.layout === 'products' ? '/products' : ''}`,
    }),
    products: ({ filters }: { filters?: Record<string, string>} = {}): IAppLinkHref => ({
        href: {
            pathname: '/catalog/products',
            query: {
                ...filters,
            },
        },
    }),
    product: (product: any): IAppLinkHref => ({
        href: `/products/[slug]?slug=${product}`,
        as: `/products/${product}`,
    }),
    brand: (brand: IBrand) => '/',
    cart: () => '/cart',
    checkout: () => '/cart/checkout',
    checkoutSuccess: (order: any): IAppLinkHref => ({
        href: `/cart/checkout/[token]?token=${order}`,
        as: `/cart/checkout/${order}`,
    }),
     producturl: (productFeatured: any): IAppLinkHref => ({
        href: `/products/[slug]?slug=${productFeatured}`,
        as: `/products/${productFeatured}`,
    }),
    wishlist: () => '/wishlist',
    compare: () => '/compare',
    trackOrder: () => '/track-order',
   
    // blog pages
    blog: () => '/demo/blog/classic-right-sidebar',
    post: (post: IPost) => '/demo/blog/post-full-width',

    // auth pages
    signIn: () => '/account/login',
    signUp: () => '/',
    passwordRecovery: () => '/',

    // account pages
    accountDashboard: (): IAppLinkHref => '/account/dashboard',
    accountGarage: () => '/account/garage',
    accountProfile: () => '/account/profile',
    accountPassword: () => '/account/password',
    accountOrders: () => '/account/orders',
    accountOrderView: (order: any): IAppLinkHref => ({
        href: `/account/orders/[id]?id=${order}`,
        as: `/account/orders/${order}`,
    }),
    accountAddresses: () => '/account/addresses',
    accountAddressNew: (): IAppLinkHref => ({
        href: '/account/addresses/[id]?id=new',
        as: '/account/addresses/new',
    }),
    accountAddressEdit: (address: IAddress): IAppLinkHref => ({
        href: `/account/addresses/[id]?id=${address.id}`,
        as: `/account/addresses/${address.id}`,
    }),

    // site pages
    pageAboutUs: () => '/about-us',
    pageContactUs: () => '/contact-us',
    pageStoreLocation: () => '/',
    pageTerms: () => '/terms',
};

export default url;
