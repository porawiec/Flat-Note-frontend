const initState = {
    authError: null,
    currentUser: []
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success', action)
            return {
                ...state,
                currentUser: action.user,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return {
                authError: null,
                currentUser: {}
            }
        case 'SIGN_UP_ERROR':
            console.log('sign up error')
            return {
                ...state,
                authError: 'sign up failed'
            }
        case 'SIGN_UP_SUCCESS':
            console.log('created new account')
            return {
                ...state,
                authError: null,
                user: action.user
            }

        default:
            return state
    }
}

export default authReducer