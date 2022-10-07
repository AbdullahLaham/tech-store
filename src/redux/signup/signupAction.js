import { SIGNUP_REQUEST,  SUCCESS_SIGNUP, FAILED_SIGNUP} from "./signupTypes";

export const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST,
    }
}
export const successSignup = (data) => { 
     return {
        type: SUCCESS_SIGNUP,
        payload: data,
     }
}
export const faieldSignup = (error) => { 
     return {
        type: FAILED_SIGNUP,
        payload: error,
     }
}