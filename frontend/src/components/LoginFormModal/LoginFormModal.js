import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
        const removeLogin = (e) => {
            loginModal.current.style.marginTop = "-600px"
            setTimeout(() => dispatch(toggleLoginModal(false)), 300)
        };
        if (loginModal && loginModal.current) {loginModal.current.style.marginTop = "130px"}
        
        if (loginContainer && loginContainer.current) { 
            loginContainer.current.addEventListener('click', removeLogin); 
        }
       
        
        },[])
        
    useEffect(()=>{
        if (sessionUser) {
            dispatch(toggleLoginModal(false))

        }
    }, [sessionUser])
    


    const handleDemoClick = (e) => {    
        e.preventDefault()
        dispatch(loginSessionUser('demo@user.com', 'password'))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]); 
        dispatch(loginSessionUser(email, password))
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
                    {errors[0] ? <ul className="errors">{errors.map(error => (<li key={Math.random()}>{error}</li>))}</ul> : null}
                </form>
                
                <div id="LoginSignupContainer"><p>"Don't have a Campfire accont? <Link to={"/signup"} >Sign Up!</Link></p></div>
            </div>
           
            
        
        </>
    )
}

export default LoginFormModal