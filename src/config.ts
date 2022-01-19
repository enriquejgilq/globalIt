import { IDesktopHeaderVariant, IMobileHeaderVariant } from '~/store/options/optionsTypes';

interface IConfig {
    desktopHeaderVariant: IDesktopHeaderVariant;
    mobileHeaderVariant: IMobileHeaderVariant;
    test: RegExp;
}

const config: IConfig = {
    desktopHeaderVariant: 'spaceship/one',
    mobileHeaderVariant: 'one',
    test: /\.(png|jpg|jpeg|gif)$/i,
};

export default config;
