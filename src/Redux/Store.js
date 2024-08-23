import { legacy_createStore } from "redux";
import { userReducer } from "./User/Reducer";

export const store=legacy_createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
