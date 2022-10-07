import { LOGIN_REQUEST,  SUCEES_LOGIN, FAILED_LOGIN} from "./loginTypes";
const initialState = {
    data: {},
    sucess: false,
    loading: false,
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SUCEES_LOGIN:
            return {
                ...state,
                sucess: true,
                error: '',
                data: action.payload,
                loading: false,
            }
        case FAILED_LOGIN:
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