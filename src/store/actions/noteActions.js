export const getNotes = (currentUser) => {
    return dispatch => {
    
        fetch('http://localhost:3000/notes')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch({ type: 'GET_NOTES', notes: res, currentUser: currentUser})
            return res
        })
        .catch((err) => {
            dispatch({ type: 'GET_NOTES_ERROR', err})
        })
        }
}


// currentUser.user.notes
export const createNote = (note, currentUser) => {
    return (dispatch) => {
        const token = localStorage.token

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                title: note.title,
                description: note.description,
                user_id: currentUser.id
            })
        }   
    
        fetch('http://localhost:3000/notes', reqObj)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    console.log(res)
                    throw(res.error)
                }
            console.log('create dispatch', res)
            dispatch({ type: 'CREATE_NOTE', note: res})
        })
            .catch((error) => {
                dispatch({ type: 'CREATE_NOTE_ERROR', error})
            })
        }
}

export const deleteNote = (noteId) => {
    return (dispatch) => {
        const token = localStorage.token

        const reqObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                id: noteId
            })
        }   
    
        fetch(`http://localhost:3000/notes/${noteId}`, reqObj)
            // .then(res => res.json())
            .then(res => {
                if(res.error) {
                    // console.log(res)
                    throw(res.error)
                }
            console.log('create dispatch', res)
            dispatch({ type: 'DELETE_NOTE', noteId: noteId})
        })
            .catch((error) => {
                dispatch({ type: 'DELETE_NOTE_ERROR', error})
            })
        }
}