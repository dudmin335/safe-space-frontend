import { 
    REGISTER_USER,
} from '../_actions/types'

export default function (state = {}, action) {
    switch(action.tpye) {
        case REGISTER_USER:
            return { ...state, register: action.payload}
            break;
        default:
            return state;
    }
}