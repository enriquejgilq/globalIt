
import { useAppAction, useAppSelector } from '~/store/hooks';
import { OEM_NAMESPACE} from '~/store/oem/oemReducers';


export const oemState = () => useAppSelector((state) => state[OEM_NAMESPACE]);
