import {
    YEARS_APPLICATIONS,
    YEARS_APPLICATIONS_SUCCESS,
    YEARS_APPLICATIONS_FAILURE,
    MAKE_APPLICATIONS,
    MAKE_APPLICATIONS_SUCCESS,
    MAKE_APPLICATIONS_FAILURE,
} from "./filterApplicationsActionsTypes";

const defaultState: any = {
    count: "",
    next: null,
    previous: null,
    years: [],
    make: [],
    model: [],
    engine: [],
    error: false,
    loading: false,
};

export const FILTER_APPLICATIONS_NAMESPACE = "filterapplications";
const filterapplicationsReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case YEARS_APPLICATIONS_SUCCESS:
            return {
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                years: action.payload.results,
                error: false,
                loading: false,
            };
        case YEARS_APPLICATIONS_FAILURE:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                years: [],
                error: action.payload,
                loading: false,
            };
        case YEARS_APPLICATIONS:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                years: [],
                error: false,
                loading: true,
            };
        case MAKE_APPLICATIONS_SUCCESS:
            return {
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                make: action.payload.results,
                error: false,
                loading: false,
            };
        case MAKE_APPLICATIONS_FAILURE:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                make: [],
                error: action.payload,
                loading: false,
            };
        case MAKE_APPLICATIONS:
            return {
                ...state,
                count: "",
                next: null,
                previous: null,
                make: [],
                error: false,
                loading: true,
            };
        default:
            return state;
    }
};

export default filterapplicationsReducer;
