import createStore from "./library/createStore";
// import { TOGGLE_DARK_MODE, CHANGE_FILTER_STATUS } from "./actions/types";
import { rootReducer } from "./reducers";

// const initialState = {
//     isDarkMode: false,
//     filterStatus: "all"
// }

// const toggleDarkMode = (state) => {
//     console.log(state.isDarkMode);
//     state.isDarkMode = !(state.isDarkMode);
//     console.log(state.isDarkMode);
// }

// export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
// export const CHANGE_FILTER_STATUS = "CHANGE_FILTER_STATUS";

// export const toggleDarkMode = () => {
//   return { type: TOGGLE_DARK_MODE }
// }

// export const changeFilterStatus = (id) => {
//   return{ type: CHANGE_FILTER_STATUS, status: id }
// }

// const reducer = (state = {
//     isDarkMode: false,
//     filterStatus: "all"
// }, action) => {
//     console.log('reducer', state, action);
//     switch(action.type) {
//       case TOGGLE_DARK_MODE:
//         // state.isDarkMode = !(state.isDarkMode);
//         return { ...state, isDarkMode: !(state.isDarkMode) }
//         // break;
//       case CHANGE_FILTER_STATUS:
//         // state.filterStatus = action.status;
//         return { ...state, filterStatus: action.status }
//         // break;
//       default:
//         console.log('default case executed');
//         break;
//     }  
// }

// const preferencesReducer = (state = {  isDarkMode: false }, action) => {
//   switch (action.type) {
//       case TOGGLE_DARK_MODE:
//           return {...state, isDarkMode: !state.isDarkMode}
//       default:
//           return state
//   }
// }

// const todoReducer = (state = { filterStatus: "all" }, action) => {
//   switch (action.type) {
//       case CHANGE_FILTER_STATUS:
//           return {...state, filterStatus: action.status}
//       default:
//           return state
//   }
// }

// const combineReducers = (reducerMappings) => {
//   const initialState = {}
 
//   Object.keys(reducerMappings).forEach(id => initialState[id] = undefined)
//   console.log(initialState)

//   const combinedReducer = (state = initialState, action) => {
//       let newState = { ...state }

//       Object.entries(reducerMappings).forEach(([id, reducer]) => {
//           newState[id] = reducer(newState[id], action)
//           console.log(newState)
//       })

//       return newState
//   }

//   return combinedReducer
// }

// const rootReducer = combineReducers({
//   "preferencesReducer": preferencesReducer,
//   "todoReducer": todoReducer
// })
  
const store = createStore(/*initialState,*/ rootReducer);
  
// const store = createStore(initialState, toggleDarkMode);

/*
let expected = { isDarkMode: true, filterStatus: "all" }
let currState = { isDarkMode: false, filterStatus: "all" }
let action = toggleDarkMode();
let actual = preferencesReducer(currState, action);

if (JSON.stringify(expected) != JSON.stringify(actual)) {
  throw `Expected: ${expected} but received ${actual}`
} else {
  console.log("Test passed for TOGGLE_DARK_MODE")
}

expected = { isDarkMode: false, filterStatus: "active" }
currState = { isDarkMode: false, filterStatus: "all" }
action = changeFilterStatus("active");
actual = todoReducer(currState, action);

if (JSON.stringify(expected) != JSON.stringify(actual)) {
  throw `Expected: ${expected} but received ${actual}`
} else {
  console.log("Test passed for CHANGE_FILTER_STATUS")
}
*/

export default store;
