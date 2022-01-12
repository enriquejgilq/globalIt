import { ILogin } from '~/interfaces/login'
import { FETCH_LOGIN, ERROR_LOGIN, LOADING_LOGIN } from './loginActionTypes'

const defaultState: ILogin = {
    user: {
        id: '',
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        picture: '',
        user_role: '',
        company_name: '',
        is_active: false,
        expiration: '',
        view_prices: false,
        mac_address: '',
    },
    access_token: '',
    error: '',
    loading: false
}

export const LOGIN_NAMESPACE = 'login';

const loginReducer = (state: ILogin = defaultState, action: any) => {
    switch (action.type) {
        case FETCH_LOGIN:
            return {
                user: action.payload.user,
                access_token: action.payload.access_token,
                error: false,
                loading: false 
            }
        case ERROR_LOGIN:
            return {
                ...state,
                error: action.payload,
                loading: false,
                access_token: '',
            }
        case LOADING_LOGIN:
            return {
                user: {
                    id: '',
                    username: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    picture: '',
                    user_role: '',
                    company_name: '',
                    is_active: false,
                    expiration: '',
                    view_prices: false,
                    mac_address: '',
                },
                access_token: '',
                error: '',
                loading: true
            }
        default:
            return state;
    }
}
export default loginReducer;