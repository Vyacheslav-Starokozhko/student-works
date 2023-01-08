import React from 'react';
import {registration} from "../../actions/auth.action";

const Registration = () => {
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
            <button onClick={() => registration(form.email, form.password)}>Submit</button>
        </form>
    );
};

export default Registration;