import { useAppAction, useAppSelector } from '~/store/hooks';
import { APPLICATIONS_NAMESPACE } from '~/store/applications/applicationsReducers';


export const applicationsState = () => useAppSelector((state) => state[APPLICATIONS_NAMESPACE]);