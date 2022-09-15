import { InitialState } from "./state"
import {  GET_CATEGORY_LIST, GET_INDRIDENTS_INFO, GET_PRODUCTS_DETAILS , UPDATE_CART_DETAILS,GET_ACCESS_TOKEN, SET_LOADING_STATE} from "./types"

const reducer = (state=InitialState, action) => {
    switch (action.type){
        case GET_ACCESS_TOKEN: 
         return {
            ...state,
            isAuthorised: action.payload
         }
        case GET_PRODUCTS_DETAILS:
            return {
            ...state,
                productList: action.payload
            }
        case GET_CATEGORY_LIST: 
         return {
            ...state,
            categoryList: action.payload
         }
        
        case UPDATE_CART_DETAILS: 
        return {
            ...state,
            cartDetails: action.payload
        }
        case GET_INDRIDENTS_INFO: 
        return {
            ...state,
            ingridentsInfo: action.payload
        }
        case SET_LOADING_STATE:
            return {
                ...state,
                isLoading: action.payload
            }
    }
}

export default reducer 