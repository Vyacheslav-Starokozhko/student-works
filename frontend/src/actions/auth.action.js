import {setUser} from "../reducers/userReducer";
import axios from "axios";

export const registration = async (email,password)=>{
    try {
        const response = await axios.post("http://localhost:5000/api/auth/registration", {email, password})
        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {email, password});
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            console.log(e.response.data.message);
        }
    }

}