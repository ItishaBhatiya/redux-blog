import { combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./User/Reducer";
import { ProductReducer } from "./Product/ProductReducer";

export const combineredu = combineReducers({
    user:userReducer,
    product:ProductReducer
})

export const store=legacy_createStore(combineredu, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
