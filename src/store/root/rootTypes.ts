import cartReducer, { CART_NAMESPACE } from '~/store/cart/cartReducer';
import compareReducer, { COMPARE_NAMESPACE } from '~/store/compare/compareReducer';
import currencyReducer, { CURRENCY_NAMESPACE } from '~/store/currency/currencyReducer';
import garageReducer, { GARAGE_NAMESPACE } from '~/store/garage/garageReducer';
import mobileMenuReducer, { MOBILE_MENU_NAMESPACE } from '~/store/mobile-menu/mobileMenuReducer';
import optionsReducer, { OPTIONS_NAMESPACE } from '~/store/options/optionsReducer';
import quickviewReducer, { QUICKVIEW_NAMESPACE } from '~/store/quickview/quickviewReducer';
import shopReducer from '~/store/shop/shopReducer';
import userReducer, { USER_NAMESPACE } from '~/store/user/userReducer';
import wishlistReducer, { WISHLIST_NAMESPACE } from '~/store/wishlist/wishlistReducer';
import { AppReducerStateType } from '~/store/types';
import { SHOP_NAMESPACE } from '~/store/shop/shopTypes';
import featuredProductsReducer,{FEATUREPRODUCT_NAMESPACE} from '~/store/featuredProducts/featuredProductsReducers';
import loginReducer, { LOGIN_NAMESPACE } from '../login/loginReducers';
import  featuredCategoriesReducer,{FEATUREDCATEGORIES_NAMESPACE} from '../featuredCategories/featuredCategoriesReducers';
import categoryProductsReducer, { CATEGORY_PRODUCTS_NAMESPACE } from '../categoryProducts/categoryProductsReducers';
import categoryProductsChildrenReducer, {CATEGORY_PRODUCTS_CHILDREN_NAMESPACE} from '../categoryProducts/categoryProductsChildren/categoryProductsChildrenReducers';
import catalogProductsReducer,{CATALOG_PRODUCTS_NAMESPACE} from '../catalogProducts/catalogProductsReducers';
import imagesCarouselReducer,{IMAGESCAROUSEL_NAMESPACE} from '../imagesCarousel/imagesCarouselReducers';
import oemReducer,{OEM_NAMESPACE} from '../oem/oemReducers';
import applicationsReducer,{APPLICATIONS_NAMESPACE} from '../applications/applicationsReducers';


export interface IRootState {
    [CART_NAMESPACE]: AppReducerStateType<typeof cartReducer>;
    [COMPARE_NAMESPACE]: AppReducerStateType<typeof compareReducer>;
    [CURRENCY_NAMESPACE]: AppReducerStateType<typeof currencyReducer>;
    [GARAGE_NAMESPACE]: AppReducerStateType<typeof garageReducer>;
    [MOBILE_MENU_NAMESPACE]: AppReducerStateType<typeof mobileMenuReducer>;
    [OPTIONS_NAMESPACE]: AppReducerStateType<typeof optionsReducer>;
    [QUICKVIEW_NAMESPACE]: AppReducerStateType<typeof quickviewReducer>;
    [SHOP_NAMESPACE]: AppReducerStateType<typeof shopReducer>;
    [USER_NAMESPACE]: AppReducerStateType<typeof userReducer>;
    [WISHLIST_NAMESPACE]: AppReducerStateType<typeof wishlistReducer>;
    [FEATUREPRODUCT_NAMESPACE]: AppReducerStateType<typeof featuredProductsReducer>;
    [LOGIN_NAMESPACE]: AppReducerStateType<typeof loginReducer>; 
    [FEATUREDCATEGORIES_NAMESPACE]: AppReducerStateType<typeof featuredCategoriesReducer>; 
    [CATEGORY_PRODUCTS_NAMESPACE]: AppReducerStateType<typeof categoryProductsReducer>;
    [CATEGORY_PRODUCTS_CHILDREN_NAMESPACE]: AppReducerStateType<typeof categoryProductsChildrenReducer>;
    [CATALOG_PRODUCTS_NAMESPACE]: AppReducerStateType<typeof catalogProductsReducer>;
    [IMAGESCAROUSEL_NAMESPACE]: AppReducerStateType<typeof imagesCarouselReducer>;
    [OEM_NAMESPACE]: AppReducerStateType<typeof oemReducer>;
    [APPLICATIONS_NAMESPACE]: AppReducerStateType<typeof applicationsReducer>;




}