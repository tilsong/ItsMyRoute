export const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    isLoggingOut: false,
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}

export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    }
}

export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FAILURE',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
}

export const logoutSuccessAction = () => {
    return {
        type: 'LOG_OUT_SUCCESS',
    }
}

export const logoutFailureAction = () => {
    return {
        type: 'LOG_OUT_FAILURE',
    }
}


const user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST' :
            return {
                    ...state,
                    isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS' :
            return {
                    ...state,
                    isLoggingIn: false,
                    isLoggedIn: true,
                    me: { ...action.data, nickname: 'mymy'},
            };            
        case 'LOG_IN_FAILURE' :
            return {
                    ...state,
                    isLoggingIn: false,
                    isLoggedIn: false,
            };            
    
        case 'LOG_OUT_REQUEST' :
            return {
                    ...state,
                    isLoggedIn: true,
                    me: null,
            };
        case 'LOG_OUT_SUCCESS' :
            return {
                    ...state,
                    isLoggingOut: false,
                    isLoggedIn: false,
                    me: null,
            };            
        case 'LOG_OUT_FAILURE' :
            return {
                    ...state,
                    isLoggingOut: false,
            };   
        default: 
            return state;
    }
}

export default user;