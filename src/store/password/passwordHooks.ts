
import { useAppAction, useAppSelector } from '~/store/hooks';
import { NEW_PASSWORD_NAMESPACE } from '~/store/password/passwordReducers';

export const newpasswordState = () => useAppSelector((state) => state[NEW_PASSWORD_NAMESPACE]);