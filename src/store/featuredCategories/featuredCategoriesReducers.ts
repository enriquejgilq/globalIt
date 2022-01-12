import { IFeaturedCategories } from '~/interfaces/featuredCategories';
import { GET_CATERGORIES, GET_CATERGORIES_SUCCESS, GET_CATERGORIES_FAILURE } from './featuredCategoriesActionsTypes';
const defaultState :IFeaturedCategories = {
    count: 0,
    next: '',
    previous: '',  
    results: [],
    error: '',
    loading: false,
}
export const FEATUREDCATEGORIES_NAMESPACE = 'featurecategories';

const featuredCategoriesReducer = (state: IFeaturedCategories = defaultState, action: any) => {
    switch (action.type) {
        case GET_CATERGORIES:
            return {
                count: 0,
                next: '',
                results: [],
                error: false,
                loading: true 
            }
        case GET_CATERGORIES_SUCCESS:
            return {
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results : action.payload.results,
                error: false,
                loading: false,
            }
            case GET_CATERGORIES_FAILURE:
                return {
                    ...state,
                count: 0,
                next: '',
                results : [],	
                error: action.payload,
                loading: false, 
                }    
        default:
            return state;
    }
}
export default featuredCategoriesReducer;