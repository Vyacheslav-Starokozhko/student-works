import {combineReducers, createStore} from "redux";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";



const rootReducer = combineReducers({
    user : userReducer,
    orders: orderReducer,
});

export const store = createStore(rootReducer)