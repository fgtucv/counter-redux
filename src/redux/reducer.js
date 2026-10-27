const initialsState = {
    count: 0
};

export const counterReducer = (state = initialsState, action) => {
    console.log(action)
    if (action.type === "add") {
        return { ...state, count: state.count + action.payload};
    } else if (action.type === "minus") {
        return { ...state, count: state.count - action.payload};
    } else {
        return state;
    }
};