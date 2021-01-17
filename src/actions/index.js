import axios from 'axios'
import {USER_LOGIN} from './types'

export const userLogin = (credentials) =>
    async dispatch => {
       const res = await axios.post('/api/login', credentials)
       dispatch({type: USER_LOGIN, payload: true})
    }
