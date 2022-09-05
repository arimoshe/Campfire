import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginSessionUser } from "../../store/session";
import './LoginForm.css'

export const LoginFormPage = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const sessionUser = useSelector(state => state.session.user)

    const dispatch = useDispatch();

    if (sessionUser) {

        return (
            <Redirect to="/" />
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]);
        return dispatch(loginSessionUser(email, password))
            .catch(async (res) => {
                let data;
                try {

                    data = await res.clone().json()
                }
                catch {
                    data = await res.text()
                }
                if (data && data.errors) { setErrors(data.errors); }
                else if (data) { setErrors([data]); }
                else { setErrors([res.statusText]) }

            })


    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="user" >User</label><br />
            <input type="text" id="user" onChange={e => setEmail(e.target.value)} value={email} required /><br /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} required /><br /><br />
            <button type="submit">Log In</button>
            <br />
            <ul>
                {errors.map(error => (<li key={Math.random()}>{error}</li>))}
            </ul>
        </form>
    )
}

export default LoginFormPage