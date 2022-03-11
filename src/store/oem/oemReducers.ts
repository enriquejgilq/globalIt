import {
    OEM,
    OEM_SUCCESS,
    OEM_FAILURE,
   } from './oemActionTypes'

   const defaultState: any = {
    count: '',
    next: null,
    previous: null,
    results: [],
    error: false,
    loading: false

}
export const OEM_NAMESPACE = 'oem';

const oemReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case OEM_SUCCESS:
            return {
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results,
                error: false,
                loading: false
            }
        case OEM_FAILURE:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: action.payload,
                loading: false
            }
        case OEM:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: false,
                loading: true
            }
        default:
            return state;
    }
}

export default oemReducer;
