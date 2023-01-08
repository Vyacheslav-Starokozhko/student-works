const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";

const defaultState = {
    currentUser: {},
    isAuth: false
};

export default function userReducer(state = defaultState, action){
    switch (action.type){

        default:
            return state;
    }
}

export const setUser = user =>({type:SET_USER,payload:user});
export const logoutUser = () =>({type:LOGOUT_USER});