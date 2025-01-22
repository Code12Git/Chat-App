import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType"

const initialState = {
    user: null,
    isLoading: false,
    error: false,
    errorMessage:null,
    success: false,
    successMessage: null,
}

let authReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case REGISTER_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                user:payload,
                success: true,
                successMessage: "User Registered Successfully",
            }
        }    
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: payload,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload,
                success: true,
                successMessage: "User Logged In Successfully",
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: payload,
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                isLoading: false,
                error: false,
                errorMessage: null,
                success: false,
                successMessage: null,
            }
        default:
            return state;
    }
}

export default authReducer;