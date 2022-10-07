import axios from 'axios';
import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART_COUNT} from './cartTypes';
const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let cart = state?.cart;
            console.log('pay', action.payload)
            let flag = 0;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i]?._id == action.payload?._id) flag = 1;
            }
            !flag && cart.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('new', cart)
            return {
                ...state,
                cart: cart, 
            }

        case DELETE_FROM_CART:
            const removeItem = async () => {
                const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
                await axios.delete(`https://omar-tech-store.herokuapp.com/api/users/profile/cart?productId=${action.payload}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                })
                .then((res) => {
                    console.log('deleted', res)
                })
                .catch((err) => {
                    console.log('error', err)
                })
            }
            removeItem();
            let newCart = state?.cart?.filter(item => item?._id !== action.payload );
            localStorage.setItem('cart', JSON.stringify(newCart));
            console.log('newCart', newCart);
            return {
                ...state,
                cart: newCart,
            }
        case UPDATE_CART_COUNT: {
            state?.cart.map((element, i) => {
                if (element._id == action.payload?.id) {
                    let newItem = {...element, qty: action.payload.qty}
                    let newCart = state?.cart;
                    newCart[i] = newItem;
                    return {
                        ...state,
                        cart: newCart,
                    }
                }
            })
        } 
            
                
        default : return state
    }
}

export default cartReducer;