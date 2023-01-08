import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";



const rootReducer = combineReducers({
    user : userReducer,
    orders: orderReducer,
});

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))