import { TOGGLE_DARK_MODE } from "../actions/types"

export const preferencesReducer = (state = {  isDarkMode: false }, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {...state, isDarkMode: !state.isDarkMode}
        default:
            return state
    }
}
