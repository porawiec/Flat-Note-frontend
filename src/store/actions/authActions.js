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
            dispatch({ type: 'LOGIN_SUCCESS', currentUser: res})
                localStorage.setItem("token", res.jwt)
            dispatch({ type: 'GET_NOTES', notes: res.user.notes})
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
        localStorage.removeItem('token')
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

export const getProfile = () => {
    return (dispatch) => {
        const token = localStorage.token

        const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        }

    fetch('http://localhost:3000/profile', reqObj)
        .then(res => res.json())
        .then(userObj => {
            if(userObj.error) {
                console.log('profile fetch', userObj)
                throw(userObj.error)
            }
        if (!userObj.error) {
            dispatch({ type: 'GET_PROFILE_AUTH', currentUser: userObj.user})
            dispatch({ type: 'GET_PROFILE_NOTE', notes: userObj.user.notes})
            console.log('do things profile fetch', userObj.user)

        } else {
            alert(userObj.error)
            localStorage.removeItem('token')
        }
        }
        )
        .catch(error => {
            console.log(error)
        })
    }
}