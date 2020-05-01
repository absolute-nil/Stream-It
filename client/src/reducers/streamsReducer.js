import _ from "lodash"

import {EDIT_STREAM,DELETE_STREAM,CREATE_STREAM,FETCH_STREAM,FETCH_STREAMS} from "../actions/types"

export default (state=[],action) => {

    switch (action.type) {
        case CREATE_STREAM:
            case FETCH_STREAM:
                case EDIT_STREAM:
                    return{...state,[action.type]:action.payload};
        case DELETE_STREAM:
            return _.omit(state,action.payload)
        case FETCH_STREAMS:
            return{...state,..._.mapKeys(action.payload,"id")}
    
        default:
            return state;
    }

}