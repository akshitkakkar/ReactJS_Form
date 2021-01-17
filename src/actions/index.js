import axios from 'axios'
import {USER_LOGIN} from './types'

/**
 * Action creator to be called when user attempts to log in
 */
export const userLogin = (credentials) =>
    async dispatch => {
       const res = await axios.post('/api/login', credentials)
       dispatch({type: USER_LOGIN, payload: true})
    }
