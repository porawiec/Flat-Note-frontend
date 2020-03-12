export const signIn = (credentials) => {
    return (dispatch, getState) => {

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(credentials)
        }
    
        fetch('http://localhost:3000/auth', reqObj)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch({ type: 'LOGIN_SUCCESS', user: res})
            // this.props.history.push('/') *************** NOT WORKING ****************
            // console.log(res)
            return res
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err})
            })
        }
}

export const signOut = () => {
    return (dispatch, getState) => {

// setState of user to '' ?
        fetch('http://localhost:3000/auth')
            .then((users) => {
                dispatch({ type: 'SIGNOUT_SUCCESS', users: users})
            })
        }
}

export const signUp = (credentials) => {
    return (dispatch, getState) => {

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(credentials)
        }
    
        fetch('http://localhost:3000/users', reqObj)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch({ type: 'SIGN_UP_SUCCESS', user: res.user})
            return res.user
            })
            .catch((err) => {
                dispatch({ type: 'SIGN_UP_ERROR', err})
            })
        }
}