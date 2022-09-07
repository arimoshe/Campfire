// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Redirect } from "react-router-dom";
// import { loginSessionUser } from "../../store/session";
import { toggleLoginModal } from "../../store/ui";
import './LoginForm.css'

export const LoginForm = (props) => {

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [errors, setErrors] = useState([])
    const sessionUser = useSelector(state => state.session.user)
      const dispatch = useDispatch();
        


    if (sessionUser) {

        dispatch(toggleLoginModal(true));
    }
    return <Redirect to="/" />
   
    //

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors([]);
    //     return dispatch(loginSessionUser(email, password))
    //         .catch(async (res) => {
    //             let data;
    //             try {

    //                 data = await res.clone().json()
    //             }
    //             catch {
    //                 data = await res.text()
    //             }
    //             if (data && data.errors) { setErrors(data.errors); }
    //             else if (data) { setErrors([data]); }
    //             else { setErrors([res.statusText]) }

    //         })


    // }

    // return (
        // <>
        // <div id="LoginContainer">
        //     <div id="loginHeader">Welcome!</div>
        //     <div id="loginSubHead">Lets dive into nature.</div>
        //     <form id="loginForm" onSubmit={handleSubmit}>
        //             <input type="text" id="user" onChange={e => setEmail(e.target.value)} value={email} required placeholder={"Email address..."} />
                
        //         <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} placeholder={"Password..."} required />
        //         <button type="submit">Log In</button>
        //     </form>
        //     <button id="demoLoginButton" >Demo User Log In</button>
        //     <p>"Don't have a Campf🔥re accont? <Link to={"/signup"} >Sign Up!</Link></p>
        //     <br />
        //     <ul>
        //         {errors.map(error => (<li key={Math.random()}>{error}</li>))}
        //     </ul>
            
        // </div>
        // </>
    // )
}

export default LoginForm