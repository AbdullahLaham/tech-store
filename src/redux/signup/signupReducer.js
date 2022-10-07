// import { loginSuccess } from "./loginAction";
import { SIGNUP_REQUEST,  SUCCESS_SIGNUP, FAILED_SIGNUP} from "./signupTypes";
const initialState = {
    data: {},
    sucess: false,
    loading: false,
    error: '',
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_SIGNUP:
            return {
                ...state,
                sucess: true,
                error: '',
                data: action.payload,
                loading: false,
            }
        case FAILED_SIGNUP:
            return {
                ...state,
                data: {},
                error: action.payload,
                sucess: false,
                loading: false,
            }
        default : return state
    }
}

export default loginReducer;