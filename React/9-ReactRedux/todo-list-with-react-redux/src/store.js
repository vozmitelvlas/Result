import {createStore, applyMiddleware, compose, combineReducers} from "redux"
import {todosReducer, optionsReducer, todoReducer} from "./reducers/index.js"
import {thunk} from "redux-thunk"

const reducer = combineReducers({
    todos: todosReducer,
    todo: todoReducer,
    options: optionsReducer
})
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))