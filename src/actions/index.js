
import {TOGGLE_DARK_MODE, CHANGE_FILTER_STATUS} from "./types";

export const toggleDarkMode = () => {
    return { type: TOGGLE_DARK_MODE }
}
  
export const changeFilterStatus = (id) => {
    return{ type: CHANGE_FILTER_STATUS, payload: id }
}