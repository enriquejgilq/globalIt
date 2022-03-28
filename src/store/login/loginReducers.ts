import { ILogin } from '~/interfaces/login'
import { FETCH_LOGIN, ERROR_LOGIN, LOADING_LOGIN, LOGOUT } from './loginActionTypes'
import { withClientState } from '~/store/client';

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
    error: null,
    loading: false
}

export const LOGIN_NAMESPACE = 'login';

function loginCurrency(state = defaultState, action: any): ILogin {

    switch (action.type) {
        case FETCH_LOGIN:
            return {
                // ...state,
                user: action.payload.user,
                access_token: action.payload.access_token,
                error: null,
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
                error: null,
                loading: true
            }
        case LOGOUT:
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
                error: null,
                loading: false
            }


        default:
            return state;
    }
}
const loginReducer = withClientState(loginCurrency, LOGIN_NAMESPACE);

export default loginReducer;