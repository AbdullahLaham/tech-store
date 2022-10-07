import { LOGIN_REQUEST,  SUCEES_LOGIN, FAILED_LOGIN} from "./loginTypes";

export const loginRequest = () => {
    return {
        type: 'LOGIN_REQUEST',
    }
}
export const loginSuccess = (data) => {
    const {email, token, isAdmin} = data;
    return {
        type: SUCEES_LOGIN,
        payload: {email, token, isAdmin},
    }
}
export const loginFailed = (error) => {
    return {
        type: 'LOGIN_FAILED',
        payload: error,
    }
}