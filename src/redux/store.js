import { combineReducers, applyMiddleware, createStore } from 'redux'

import loginReducer from './login/loginReducer';
import signupReducer from './signup/signupReducer';
import cartReducer from './cart/cartReducer'
import logger from 'redux-logger'
const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    cart: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger))
export default store;