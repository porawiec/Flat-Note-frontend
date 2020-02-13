const initState = {
    notes: [
        {id: '1', title: 'title note 1', description: 'description note 1'},
        {id: '2', title: 'title note 2', description: 'description note 2'},
        {id: '3', title: 'title note 3', description: 'description note 3'},
    ]
}

const noteReducer = (state = initState, action) => {
    return state
}

export default noteReducer