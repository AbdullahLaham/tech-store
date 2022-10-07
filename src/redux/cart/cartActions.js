import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART_COUNT} from './cartTypes';

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data,
    }
}
export const removeFromCart = (id) => {
    
    return {
        type: DELETE_FROM_CART,
        payload: id,
    }
}

export const updateProductCount = (data) => {
    
    return {
        type: UPDATE_CART_COUNT,
        payload: {id: data?._id, qty: data?.qty},
    }
}