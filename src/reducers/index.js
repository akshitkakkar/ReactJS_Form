import {combineReducers} from 'redux'
import userLoginReducer from './userLoginReducer'
import {reducer as reduxForm} from 'redux-form'

export default combineReducers({
    loggedIn: userLoginReducer,
    form: reduxForm
})