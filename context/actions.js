import { GET_PRODUCTS_DETAILS,GET_CATEGORY_LIST,GET_SELECTED_PRODUCTLIST, UPDATE_CART_DETAILS, GET_INDRIDENTS_INFO, GET_ACCESS_TOKEN,SET_LOADING_STATE} from "./types";

export const getProductList = ({items}) => ({
    type: GET_PRODUCTS_DETAILS,
    payload: items
})

export const getCategoryList = ({items}) => ({
 type: GET_CATEGORY_LIST,
 payload: items
})

export const updateCartDetails = (payload) => ({
    type: UPDATE_CART_DETAILS,
    payload
})
export const updateIndridentsInfo = (payload) => ({
    type: GET_INDRIDENTS_INFO,
    payload
})
export const updateIsAuthorised = (payload) => ({
    type: GET_ACCESS_TOKEN,
    payload
})

export const setLoaderState = (payload) => ({
    type: SET_LOADING_STATE,
    payload
})