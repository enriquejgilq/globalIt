export interface ILogin {
    user:{
        id: string;
        username: string;
        first_name: string;
        last_name: string;
        email: string;
        mac_address: string;
        phone_number: string;
        picture: string;
        user_role: string
        company_name: string;
        is_active: boolean;
        expiration: string;
        view_prices: boolean;
    }
    access_token:string;
    error: any;
    loading: boolean
}
