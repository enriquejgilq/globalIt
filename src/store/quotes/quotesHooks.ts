
import { useAppAction, useAppSelector } from '~/store/hooks';
import { QUOTES_NAMESPACE} from '~/store/quotes/quotesReducers';


export const quotesState = () => useAppSelector((state) => state[QUOTES_NAMESPACE]);
