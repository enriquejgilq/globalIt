// react
import React, { useMemo, useRef } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AccountMenu from '~/components/header/AccountMenu';
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
// import Departments from '~/components/header/Departments';
import Dropcart from '~/components/header/Dropcart';
import Indicator, { IIndicatorController } from '~/components/header/Indicator';
import Logo from '~/components/header/Logo';
import MainMenu from '~/components/header/MainMenu';
import Search from '~/components/header/Search';
import Topbar from '~/components/header/Topbar';
import url from '~/services/url';
import { Heart32Svg, Person32Svg, Cart32Svg, List2Svg } from '~/svg';
import { useCart } from '~/store/cart/cartHooks';
import { useOptions } from '~/store/options/optionsHooks';
import { useUser } from '~/store/user/userHooks';
import { useWishlist } from '~/store/wishlist/wishlistHooks';
import { getlogin, isAuth } from '~/store/login/loginHooks'
import ImageIcon from '../../../public/images/avatars/icon.svg'

function Header() {

    const user = useUser();
    const wishlist = useWishlist();
    const options = useOptions();
    const desktopLayout = options.desktopHeaderLayout;
    const is_auth = isAuth()
    const user_info = getlogin()
    const departmentsLabel = useMemo(() => (
        desktopLayout === 'spaceship'
            ? <FormattedMessage id="BUTTON_DEPARTMENTS" />
            : <FormattedMessage id="BUTTON_DEPARTMENTS_LONG" />
    ), [desktopLayout]);

    const accountIndicatorLabel = is_auth ? user_info.user.email : <p></p>;
    const accountIndicatorValue = is_auth ? <FormattedMessage id="TEXT_INDICATOR_ACCOUNT_VALUE2" /> : <FormattedMessage id="TEXT_INDICATOR_ACCOUNT_VALUE" />;
    const accountIndicatorCtrl = useRef<IIndicatorController | null>(null);

    const cart = useCart();
    const cartIndicatorLabel = <FormattedMessage id="TEXT_INDICATOR_CART_LABEL" />;
    const cartIndicatorCtrl = useRef<IIndicatorController | null>(null);

    return (
        <div className="header">
            <div className="header__megamenu-area megamenu-area" />
            {desktopLayout === 'spaceship' && (
                <React.Fragment>
                    <div className="header__topbar-start-bg" />
                    <div className="header__topbar-start">
                        <Topbar layout="spaceship-start" />
                    </div>
                    <div className="header__topbar-end-bg" />
                    <div className="header__topbar-end">
                        <Topbar layout="spaceship-end" />
                    </div>
                </React.Fragment>
            )}
            {desktopLayout === 'classic' && (
                <React.Fragment>
                    <div className="header__topbar-classic-bg" />
                    <div className="header__topbar-classic">
                        <Topbar layout="classic" />
                    </div>
                </React.Fragment>
            )}

            <div className="header__navbar">
                {/* <div className="header__navbar-departments">
                    <Departments label={departmentsLabel} />
                </div> */}
                <div className=" header__navbar-menu">
                    <MainMenu />
                </div>
                {desktopLayout === 'classic' && (
                    <div className="header__navbar-phone phone">
                        <AppLink href={url.pageContactUs()} className="phone__body">
                            <div className="phone__title">
                                <FormattedMessage id="TEXT_CALL_US" />
                            </div>
                            <div className="phone__number">800 060-0730</div>
                        </AppLink>
                    </div>
                )}
            </div>
            <Logo className="header__logo" />
            <div className="header__search">
                <Search />
            </div>
            <div className="header__indicators">
                {/**  <Indicator
                    href={url.wishlist()}
                    icon={<Heart32Svg />}
                    counter={wishlist.items.length}
                />*/}

                <Indicator
                    href={url.accountDashboard()}
                    icon={<Person32Svg />}
                    label={accountIndicatorLabel}
                    value={accountIndicatorValue}
                    trigger="click"
                    controllerRef={accountIndicatorCtrl}
                >
                    <AccountMenu onCloseMenu={() => accountIndicatorCtrl.current?.close()} />
                </Indicator>
                {is_auth === true && (<>
                    <Indicator
                        href={url.cart()}
                        icon={<List2Svg />}
                        label={cartIndicatorLabel}
                        value={<CurrencyFormat value={cart.subtotal} />}
                        counter={cart.quantity}
                        trigger="click"
                        controllerRef={cartIndicatorCtrl}
                    >
                        <Dropcart onCloseMenu={() => cartIndicatorCtrl.current?.close()} />
                    </Indicator>
                </>)}
            </div>
        </div>
    );
}

export default React.memo(Header);
