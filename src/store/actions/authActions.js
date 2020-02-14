export const signIn = (credentials) => {
    return (dispatch, getState) => {
        // make async call to database
        // will have:
        // username: someusername
        // user_id: 12345
    
        fetch('http://localhost:3000/users')
            .then((users) => {
                dispatch({ type: 'LOGIN_SUCCESS', users: users})
            }).catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err})
            })
        }
}

export const signOut = () => {
    return (dispatch, getState) => {

// setState of user to '' ?
        fetch('http://localhost:3000/users')
            .then((users) => {
                dispatch({ type: 'SIGNOUT_SUCCESS', users: users})
            })
        }
}