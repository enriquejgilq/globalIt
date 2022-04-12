// react
import { useMemo, useState, useEffect } from 'react';
// third-party
import { useForm } from 'react-hook-form';
// application
import { useAsyncAction } from '~/store/hooks';
import { useUserSignIn } from '~/store/user/userHooks';
import { getListProducts } from '~/store/featuredProducts/featuredProductsActions';
import { postLogin } from '~/store/login/loginAction';
import { useDispatch } from 'react-redux';
import publicIp from 'public-ip';

interface ISignInFormOptions {
    onSuccess?: () => void;
}

export interface ISignInForm {
    email: string;
    password: string;
    remember: boolean;
}

export function useSignInForm(options: ISignInFormOptions = {}) {
    const dispatch = useDispatch()
    const signIn = useUserSignIn();
    const { onSuccess } = options;
    const [serverError, setServerError] = useState<string | null>(null);
    const [ip, setIp] = useState<string>('')
    const [info, setInfo] = useState<string>('')

    const methods = useForm<ISignInForm>({
        defaultValues: {
            email: '',
            password: '',
            remember: false,
        },
    });
    async function asyncCall() {
        const result = await publicIp.v4();
        setIp(result)
    }
    useEffect(() => {
        if(ip === ''|| ip === undefined){
            asyncCall();
        }
        let navigator_info = window.navigator;
        var uid: any = navigator_info.platform
        setInfo(uid)
    }, [info, ip])

    const { handleSubmit } = methods;
    const [submit, submitInProgress] = useAsyncAction((data: ISignInForm) => {
        setServerError(null);

        const postData = {
            email: data.email,
            password: data.password,
            mac_address: ip //'191.95.167.233'
            //+info
           // '43:45:21:34:54:14',
            // ip+info,
        }
        if( ip === ''|| ip===undefined){
          //  console.log('ipvacio')
        }else{
            dispatch(postLogin(postData))

        }
        return signIn(data.email, data.password).then(
            () => {
                if (onSuccess) {
                    onSuccess();
                }
            },
            (error: Error) => {
                setServerError(`ERROR_API_${error.message}`);
            },
        );
    }, [signIn, setServerError, onSuccess]);

    return {
        submit: useMemo(() => handleSubmit(submit), [handleSubmit, submit]),
        submitInProgress: submitInProgress || methods.formState.isSubmitting,
        serverError,
        errors: methods.formState.errors,
        register: methods.register,
        watch: methods.watch,
    };
}
