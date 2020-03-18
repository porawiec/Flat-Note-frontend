export const signIn = (credentials, props) => {
    // console.log('sign in data', credentials, props)
    return (dispatch) => {

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: credentials})
        }
    
        fetch('http://localhost:3000/login', reqObj)
        .then(res => res.json())
        .then(res => {
            // console.log('login fetch', res)
            if(res.error) {
                throw(res.error)
            }
            dispatch({ type: 'LOGIN_SUCCESS', user: res})
                localStorage.setItem("token", res.jwt)
                props.history.push('/')
            return res
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err})
            })
        }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch({ type: 'SIGNOUT_SUCCESS'})
    }
}

export const signUp = (credentials, props) => {
    return (dispatch) => {
        console.log('auth action', props)
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: credentials})
        }
    
        fetch('http://localhost:3000/users', reqObj)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error)
                }
            dispatch({ type: 'SIGN_UP_SUCCESS', user: res.user})
                props.history.push('/login')
            })
            .catch((err) => {
                    dispatch({ type: 'SIGN_UP_ERROR', err})
            })
    }
}