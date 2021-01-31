import { createStore, combineReducers } from 'redux';

const reducerType = (state = '', action) => {
    return state;
};

const reducerValue = (state = 0, { type, payLoad }) => {
    switch (type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default:
            return state;
    }
};

export const actionIncrement = () => {
    return {
        type: 'INCREMENT',
    };
};
export const actionDecrement = () => {
    return {
        type: 'DECREMENT',
    };
};

const rootReducer = combineReducers({ type: reducerType, value: reducerValue });

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
