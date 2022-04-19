import { useAppAction, useAppSelector } from '~/store/hooks';
import { FILTER_APPLICATIONS_NAMESPACE } from '~/store/filterApplications/filterApplicationsReducers';


export const filterApplicationsState = () => useAppSelector((state) => state[FILTER_APPLICATIONS_NAMESPACE]);