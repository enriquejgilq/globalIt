
import {
    APPLICATIONS,
    APPLICATIONS_FAILURE, APPLICATIONS_SUCCESS
} from './applicationsActionsTypes'

const defaultState: any = {
    count: '',
    next: null,
    previous: null,
    results: [],
    error: false,
    loading: false

}

export const APPLICATIONS_NAMESPACE = 'applications';
const applicationsReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case APPLICATIONS_SUCCESS:
            return {
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results,
                error: false,
                loading: false
            }
        case APPLICATIONS_FAILURE:
            return {
                ...state,
                count: '',
                next: null,
                previous: null,
                results: [],
                error: action.payload,
                loading: false
            }
        case APPLICATIONS:
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

export default applicationsReducer;

