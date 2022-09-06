import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import './Navigation.css'
import LoginFormModal from "../LoginFormModal";
import { toggleLoginModal } from "../../store/ui";



function Navigation(props) {
    const currentUser = useSelector(state => state.session.user)
    
    const showLogin = useSelector(state => state.ui.loginModal)

    const dispatch = useDispatch();


    return (
        <>
            {showLogin ? <LoginFormModal /> : null}
            <div id="navBarContainer">
                <ul className="navBar">
                    <li><NavLink to="/" className="logo" ><img className="logoPng" src="CampfireLogo.png" alt="" /></NavLink></li>
                    
                    <li id="rightNavContainer"><ul id="rightNav">
                        {currentUser ? undefined : <li><span className="underline" onClick={() => dispatch(toggleLoginModal())}>Log In</span></li>}
                        {currentUser ? undefined : <li><NavLink className="underline" to="/signup">Sign Up</NavLink></li>}
                    {currentUser ? <>
                            <li className="rightNavContainer underline"><NavLink to="/trips">Trips</NavLink></li>
                            <li className="rightNavContainer underline"><NavLink to="/inbox">Inbox</NavLink></li>
                        <li id="profileButttonContainer"><ProfileButton /></li>
                        </> : undefined}
                    </ul></li>

                </ul>
            </div>
        </>
    )
}

export default Navigation;