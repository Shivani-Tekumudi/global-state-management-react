import { CHANGE_FILTER_STATUS } from "../actions/types"

export const todoReducer = (state = { filterStatus: "all" }, action) => {
    switch (action.type) {
        case CHANGE_FILTER_STATUS:
            return {...state, filterStatus: action.payload}
        default:
            return state
    }
}
