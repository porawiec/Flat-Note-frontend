export const createNote = (note) => {
    return (dispatch, getState) => {
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
                username: 'someusername',
                user_id: 12345
            })
        }
    
        fetch('http://localhost:3000/notes', reqObj)
            .then(() => {
                dispatch({ type: 'CREATE_NOTE', note: note})
            }).catch((err) => {
                dispatch({ type: 'CREATE_NOTE_ERROR', err})
            })
        }
}

export const getNotes = (notes) => {
    return (dispatch, getState) => {
        // make async call to database
        // will have:
        // ...note  //also is equivalent to note.title and note.description
        // username: someusername
        // user_id: 12345
    
        fetch('http://localhost:3000/notes')
            .then((notes) => {
                dispatch({ type: 'GET_NOTES', notes: notes})
            }).catch((err) => {
                dispatch({ type: 'GET_NOTES_ERROR', err})
            })
        }
}