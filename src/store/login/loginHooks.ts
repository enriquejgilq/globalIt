
import { useAppAction, useAppSelector } from '~/store/hooks';
import {LOGIN_NAMESPACE} from '~/store/login/loginReducers'

export const getlogin = () => useAppSelector((state) => state[LOGIN_NAMESPACE]);

export const isAuth =() => useAppSelector((state) => state.login.user.is_active );


