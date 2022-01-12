
import { useAppAction, useAppSelector } from '~/store/hooks';
import {LOGIN_NAMESPACE} from '~/store/login/loginReducers'

export const getlogin = () => useAppSelector((state) => state[LOGIN_NAMESPACE]);