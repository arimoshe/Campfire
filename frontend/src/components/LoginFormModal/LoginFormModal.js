import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginSessionUser } from "../../store/session";
import { toggleLoginModal } from "../../store/ui";
import './LoginFormModal.css'

export const LoginFormModal = ({toggle}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const sessionUser = useSelector(state => state.session.user)
    
    const dispatch = useDispatch();


    const loginModal = useRef(null);

    const loginContainer = useRef(null);
 
    useEffect(()=>{
        loginModal.current.style.marginTop = "130px"
        const removeLogin = (e) => {
            dispatch(toggleLoginModal())
        };
        if (loginContainer && loginContainer.current) { 
            loginContainer.current.addEventListener('click', removeLogin); 
        }
        
        },[dispatch])



    if (sessionUser) {

        return (
            <Redirect to="/" />
        );
    }


    const handleDemoClick = (e) => {    
        e.preventDefault()
        dispatch(loginSessionUser('demo@user.com', 'password'))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]);
        dispatch(toggleLoginModal()) 
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
        <>
            <div id="LoginContainer" ref={loginContainer}></div>
            <div id="LoginModalContainer" ref={loginModal}  >
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div id="loginHeader">Welcome!</div>
                    <div id="loginSubHead">Lets dive into nature.</div>
                    <input type="text" id="user" onChange={e => setEmail(e.target.value)} value={email} required placeholder={"Email address..."} />
                    
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} placeholder={"Password..."} required />
                    <button type="submit">Log In</button>
                    <button id="demoLoginButton" onClick={handleDemoClick} >Demo User Log In</button>
                </form>
                <div id="LoginSignupContainer"><p>"Don't have a Campf🔥re accont? <Link to={"/signup"} >Sign Up!</Link></p></div>
            </div>
            {errors ? <ul>{errors.map(error => (<li key={Math.random()}>{error}</li>))}</ul> : null}
            
        
        </>
    )
}

export default LoginFormModal