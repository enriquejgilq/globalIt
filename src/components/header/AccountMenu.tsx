// react
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { useSignInForm } from '~/services/forms/sign-in';
import { useUser, useUserSignOut } from '~/store/user/userHooks';
import { validateEmail } from '~/services/validators';
import { postLogin } from '~/store/login/loginAction';
import { getlogin} from '~/store/login/loginHooks'
interface Props {
    onCloseMenu: () => void;
}

function AccountMenu(props: Props) {
    const { onCloseMenu } = props;
    const intl = useIntl();
    const user = useUser();
    const userSignOut = useUserSignOut();
    const login = getlogin();


    const signInForm = useSignInForm({
        onSuccess: useCallback(() => {
            if (onCloseMenu) {
                onCloseMenu();
            }
        }, [onCloseMenu]),
    });

    const onLogOutButtonClick = () => {
        userSignOut().then(() => {
            if (onCloseMenu) {
                onCloseMenu();
            }
        });
    };
    let msj_error = login?.error[Object.keys(login.error)[0]]
    let text = msj_error?.toString();
    return (
        <div className="account-menu" onSubmit={signInForm.submit}>
            {login.user.is_active === false && (
                <form className="account-menu__form">
                    <div className="account-menu__form-title">
                        <FormattedMessage id="HEADER_LOGIN_TO_YOUR_ACCOUNT" />
                    </div>
                    {msj_error && (
                        <div className="alert alert-xs alert-danger mt-n2">
                          {/**  <FormattedMessage id={signInForm.serverError} />*/} 
                            <p>{text}</p>
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="header-signin-email" className="sr-only">
                            <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                        </label>
                        <input
                            id="header-signin-email"
                            type="email"
                            className={classNames('form-control', 'form-control-sm', {
                                'is-invalid': signInForm.errors.email,
                            })}
                            placeholder="customer@example.com"
                            {...signInForm.register('email', { required: true, validate: { email: validateEmail } })}
                        />
                        <div className="invalid-feedback">
                            {signInForm.errors.email?.type === 'required' && (
                                <FormattedMessage id="ERROR_FORM_REQUIRED" />
                            )}
                            {signInForm.errors.email?.type === 'email' && (
                                <FormattedMessage id="ERROR_FORM_INCORRECT_EMAIL" />
                            )}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="header-signin-password" className="sr-only">
                            <FormattedMessage id="INPUT_PASSWORD_LABEL" />
                        </label>
                        <div
                            className={classNames('account-menu__form-forgot', {
                                'is-invalid': signInForm.errors.password,
                            })}
                        >
                            <input
                                id="header-signin-password"
                                type="password"
                                className={classNames('form-control', 'form-control-sm', {
                                    'is-invalid': signInForm.errors.password,
                                })}
                                placeholder={intl.formatMessage({ id: 'INPUT_PASSWORD_PLACEHOLDER' })}
                                {...signInForm.register('password', { required: true })}
                            />
                            <AppLink href={url.passwordRecovery()} className="account-menu__form-forgot-link">
                                <FormattedMessage id="LINK_FORGOT" />
                            </AppLink>
                        </div>
                        <div className="invalid-feedback">
                            {signInForm.errors.password?.type === 'required' && (
                                <FormattedMessage id="ERROR_FORM_REQUIRED" />
                            )}
                        </div>
                    </div>

                    <div className="form-group account-menu__form-button">
                        <button
                            type="submit"
                            className={classNames('btn', 'btn-primary', 'btn-sm', {
                                'btn-loading': signInForm.submitInProgress,
                            })}
                        >
                            <FormattedMessage id="BUTTON_LOGIN" />
                        </button>
                    </div>
                    <div className="account-menu__form-link">
                        <AppLink href={url.signUp()} onClick={onCloseMenu}>
                            <FormattedMessage id="LINK_CREATE_ACCOUNT" />
                        </AppLink>
                    </div>
                </form>
            )}
            {login.user.is_active === true && (
                <React.Fragment>
                    <AppLink href={url.accountDashboard()} className="account-menu__user" onClick={onCloseMenu}>
                        <div className="account-menu__user-avatar">
                            {login.user.picture === null ? (
                               <div><p><b>S/I</b></p></div>    
                              ) : (
                                <AppImage src={login.user.picture} /> 
                                    )
                             
                              }
                        </div>
                        <div className=" account-menu__user-info">
                            <div className=" account-menu__user-name">
                            {`${login.user.company_name} `}
                               {/**  {`${user.firstName} ${user.lastName}`}/**/}
                            </div>
                            <div className=" account-menu__user-email">
                               {login.user.email} 
                            </div>
                        </div>
                    </AppLink>
                    <div className="account-menu__divider" />
                    <ul className="account-menu__links">
                        <li>
                            <AppLink href={url.accountDashboard()} onClick={onCloseMenu}>
                                <FormattedMessage id="LINK_ACCOUNT_DASHBOARD" />
                            </AppLink>
                        </li>
                        <li>
                            <AppLink href={url.accountGarage()} onClick={onCloseMenu}>
                                <FormattedMessage id="LINK_ACCOUNT_GARAGE" />
                            </AppLink>
                        </li>
                        <li>
                            <AppLink href={url.accountProfile()} onClick={onCloseMenu}>
                                <FormattedMessage id="LINK_ACCOUNT_PROFILE" />
                            </AppLink>
                        </li>
                        <li>
                            <AppLink href={url.accountOrders()} onClick={onCloseMenu}>
                                <FormattedMessage id="LINK_ACCOUNT_ORDERS" />
                            </AppLink>
                        </li>
                        <li>
                            <AppLink href={url.accountAddresses()} onClick={onCloseMenu}>
                                <FormattedMessage id="LINK_ACCOUNT_ADDRESSES" />
                            </AppLink>
                        </li>
                    </ul>
                    <div className="account-menu__divider" />
                    <ul className="account-menu__links">
                        <li>
                            <button type="button" onClick={onLogOutButtonClick}>
                                <FormattedMessage id="LINK_ACCOUNT_LOGOUT" />
                            </button>
                        </li>
                    </ul>
                </React.Fragment>
            )}
        </div>
    );
}

export default AccountMenu;
