import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer.js"

const rootReducer = combineReducers({ counter: counterReducer });

export const store = createStore(rootReducer);