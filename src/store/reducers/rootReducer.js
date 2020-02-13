import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import noteReducer from './noteReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    note: noteReducer
})

export default rootReducer