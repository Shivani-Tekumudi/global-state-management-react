export const combineReducers = (reducerMappings) => {
    const initialState = {}
   
    Object.keys(reducerMappings).forEach(id => initialState[id] = undefined)
    console.log(initialState)
  
    const combinedReducer = (state = initialState, action) => {
        let newState = { ...state }
  
        Object.entries(reducerMappings).forEach(([id, reducer]) => {
            newState[id] = reducer(newState[id], action)
            console.log(newState)
        })
  
        return newState
    }
  
    return combinedReducer
}
