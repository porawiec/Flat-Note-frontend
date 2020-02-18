export const getNotes = () => {
    return dispatch => {
        // make async call to database
        // will have:
        // ...note  //also is equivalent to note.title and note.description
        // username: someusername
        // user_id: 12345
    
        fetch('http://localhost:3000/notes')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch({ type: 'GET_NOTES', notes: res.notes})
            return res.notes
        })
        .catch((err) => {
            dispatch({ type: 'GET_NOTES_ERROR', err})
        })
        }
}



export const createNote = (note) => {
    return (dispatch) => {
        // make async call to database
        // will have:
        // ...note  //also is equivalent to note.title and note.description
        // username: someusername
        // user_id: 12345

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...note, 
                user: {
                    username: 'garbageusername',
                    // this.props.user.username,
                    user_id: 12345
                    // this.props.user.user_id
                }
            })
        }
    
        fetch('http://localhost:3000/notes', reqObj)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error)
                }
            dispatch({ type: 'CREATE_NOTE', note: res.note})
            return res.note
        })
            .catch((err) => {
                dispatch({ type: 'CREATE_NOTE_ERROR', err})
            })
        }
}