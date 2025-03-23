const createStore = (/*initialState,*/ reducer) => {
    // let state = initialState;
    let state;

    const subscribers = [];

    const getState = () => {
        return state;
    }

    // const dispatch = () => {
    //     console.log('Invoked Dispatch');
    //     handler(state);
    //     subscribers.forEach(callback => callback());
    // }

    const dispatch = (action) => {
        console.log('Invoked dispatch()', action);
        state = reducer(state, action);
        console.log(state);
        subscribers.forEach(callback => callback());
    }

    dispatch({});

    const subscribe = (callback) => {
        subscribers.push(callback);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore;
