import React from 'react';
import {login} from "../../actions/auth.action";
import {useDispatch} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const [form, setForm] = React.useState({
        email: '',
        password: '',
    });

    function onChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" name="email" onChange={onChange}/>
            <input type="password" name="password" onChange={onChange}/>
            <button onClick={() => dispatch(login(form.email, form.password))}>Submit</button>
        </form>
    );
};

export default Login;