
import { useAppAction, useAppSelector } from '~/store/hooks';
import {LOGIN_NAMESPACE} from '~/store/login/loginReducers'

export const getlogin = () => useAppSelector((state) => state[LOGIN_NAMESPACE]);

export const getUser = () => useAppSelector((state) => state.login.user);

export const isAuth =() => useAppSelector((state) => state.login.user.is_active );

export const viewPrices =() => useAppSelector((state) => state.login.user.view_prices );

export const viewStock=() => useAppSelector((state) => state.login.user.view_stock );
