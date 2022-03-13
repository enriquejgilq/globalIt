// third-party
import { combineReducers } from 'redux';
// application
import version from '~/store/version';
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
import { SHOP_NAMESPACE } from '~/store/shop/shopTypes';
import featuredProductsReducer, { FEATUREPRODUCT_NAMESPACE } from '../featuredProducts/featuredProductsReducers';
import loginReducer, { LOGIN_NAMESPACE } from '../login/loginReducers';
import featuredCategoriesReducer, { FEATUREDCATEGORIES_NAMESPACE } from '../featuredCategories/featuredCategoriesReducers';
import categoryProductsReducer,{  CATEGORY_PRODUCTS_NAMESPACE   } from '../categoryProducts/categoryProductsReducers';
import categoryProductsChildrenReducer,{CATEGORY_PRODUCTS_CHILDREN_NAMESPACE } from '../categoryProducts/categoryProductsChildren/categoryProductsChildrenReducers'; 
import catalogProductsReducer,{CATALOG_PRODUCTS_NAMESPACE} from '../catalogProducts/catalogProductsReducers';
import imagesCarouselReducer,{IMAGESCAROUSEL_NAMESPACE} from '../imagesCarousel/imagesCarouselReducers';
import oemReducer,{OEM_NAMESPACE} from '../oem/oemReducers';
import applicationsReducer,{APPLICATIONS_NAMESPACE} from '../applications/applicationsReducers';
export default combineReducers({
    version: (state: number = version) => state,
    [CART_NAMESPACE]: cartReducer,
    [COMPARE_NAMESPACE]: compareReducer,
    [CURRENCY_NAMESPACE]: currencyReducer,
    [GARAGE_NAMESPACE]: garageReducer,
    [MOBILE_MENU_NAMESPACE]: mobileMenuReducer,
    [OPTIONS_NAMESPACE]: optionsReducer,
    [QUICKVIEW_NAMESPACE]: quickviewReducer,
    [SHOP_NAMESPACE]: shopReducer,
    [USER_NAMESPACE]: userReducer,
    [WISHLIST_NAMESPACE]: wishlistReducer,
    [FEATUREPRODUCT_NAMESPACE]: featuredProductsReducer,
    [LOGIN_NAMESPACE]:loginReducer,
    [FEATUREDCATEGORIES_NAMESPACE]:featuredCategoriesReducer,
    [CATEGORY_PRODUCTS_NAMESPACE]:categoryProductsReducer,
    [CATEGORY_PRODUCTS_CHILDREN_NAMESPACE]:categoryProductsChildrenReducer,
    [CATALOG_PRODUCTS_NAMESPACE]:catalogProductsReducer,
    [IMAGESCAROUSEL_NAMESPACE]:imagesCarouselReducer,
    [OEM_NAMESPACE]:oemReducer,
    [APPLICATIONS_NAMESPACE]:applicationsReducer,




});
