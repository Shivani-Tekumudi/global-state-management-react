import {preferencesReducer} from "./preferenceReducer"
import {todoReducer} from "./todoReducer"
import { combineReducers } from "../library/combineReducer"

const reducerMappings = {
  "preferencesReducer": preferencesReducer,
  "todoReducer": todoReducer
}

export const rootReducer = combineReducers(reducerMappings)
