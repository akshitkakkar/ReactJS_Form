import {USER_LOGIN} from '../actions/types'

/**
 * Reducer fired on successful log in response in userLogin action creator
 */
export default function(state=false, action) {
    switch(action.type) {
        case USER_LOGIN:
            return action.payload
        default:
            return false
    }
}