import {USER_LOGIN} from '../actions/types'

export default function(state=false, action) {
    switch(action.type) {
        case USER_LOGIN:
            console.log('reached')
            return action.payload
        default:
            return false
    }
}