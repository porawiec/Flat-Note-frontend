const initState = {
    notes: [
        // {id: '1', title: 'title note 1', description: 'description note 1'},
        // {id: '2', title: 'title note 2', description: 'description note 2'},
        // {id: '3', title: 'title note 3', description: 'description note 3'},
    ]
}

const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_NOTES':
            console.log('received notes', action.notes)
            console.log('current user reducer', action.currentUser)
            return {
                ...state,
                // notes: action.notes
                notes: action.notes.filter(note => note.user_id === action.currentUser.id)
            }

        case 'GET_NOTES_ERROR':
            console.log('received notes error', action.err)
            return state


        case 'CREATE_NOTE':
            console.log('created note', action.note)
            return ([
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description
                }
            ])

        case 'CREATE_NOTE_ERROR':
            console.log('create note error', action.err)
            return state

        default:
            return state
    }
}

export default noteReducer