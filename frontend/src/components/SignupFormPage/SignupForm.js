import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { signupUser } from "../../store/session"
import './SignupForm.css'
import { toggleLoginModal } from "../../store/ui"
import logo from './../../CampfireLogo.png'
import { fetchPixaImages } from "../../store/pixabay"

function SignupForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [errors, setErrors] = useState([]);
    const [widowWidth, setWidowWidth] = useState(window.innerWidth);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const resizer = () => {
            setWidowWidth(window.innerWidth);
        }
        window.addEventListener('resize',resizer);
        dispatch(fetchPixaImages()) 
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
        
            
        
        return()=>(window.removeEventListener('resize', resizer));
        
     },[dispatch])

     const images = useSelector(state => state.pixa)

    if (sessionUser) {

        return (
            <Redirect to="/" />
        );
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password === passwordConfirm) {
            setErrors([]);
            return dispatch(signupUser( email, password, firstName, lastName))

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
        else {
            setErrors(['Your passwords do not match'])
        }

    }

    

    return (
        <>  
            <div id="signupBackgroundDarkener"></div>
            <div id="signupBackground">
                <div className="col-1">
                    {Array.isArray(images) ? images.map(image => (<img key={image.id} alt="background" src={image.webformatURL} width={(widowWidth - 16) / 3} />)) : null}
                    
                    
                </div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
            </div>
            <div id="signupLoginButton"><Link to={'/'}><button onClick={() => dispatch(toggleLoginModal(true))}> Log In</button></Link></div>
            <div id="signupContainer">
                
                    <form id="signupLoginForm" onSubmit={handleSubmit}>
                        <img src={logo} alt="logo" />
                        <p>Search and book the great outdoors!</p>
                        <div className="formDouble">
                            <input type="text" id="firstName"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName} required placeholder={"First Name"}/>
                            <input type="text" id="LastName"
                                onChange={e => setLastName(e.target.value)}
                                    value={lastName} required placeholder={"Last Name"} />
                        </div>
                        <input type="email" id="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email} required placeholder={'Email Address'}/>
                        
                        <input type="password" id="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password} required placeholder={'Password'}/>
                    <input type="password" id="passwordConfirm"
                        onChange={e => setPasswordConfirm(e.target.value)}
                        value={passwordConfirm} required placeholder={'Confirm Password'} />
                    {errors[0] ? <ul className="errors">{errors.map(error => (<li key={Math.random()}>{error}</li>))}</ul> : null}
                        <button>Join Campfire</button>
                    </form>
                
            </div>
        </>
    )
}
export default SignupForm;