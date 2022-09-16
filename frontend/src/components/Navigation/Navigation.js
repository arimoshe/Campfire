import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import './Navigation.css'
import LoginFormModal from "../LoginFormModal";
import { toggleHamburgerMenuModal, toggleLoginModal } from "../../store/ui";
import logo from './CampfireLogo.png'
import HamburgerMenuModal from "./HamburgerMenuModal";



function Navigation(props) {
    const currentUser = useSelector(state => state.session.user)
    
    const showLogin = useSelector(state => state.ui.loginModal)

    const showMenu = useSelector(state => state.ui.hamburgerMenuModal)

    const dispatch = useDispatch();

    const location = useLocation();


    return (
        <>
            {showLogin ? <LoginFormModal /> : null}
            {showMenu ? <HamburgerMenuModal /> : null}
            <div id="navBarContainer">
                <ul className="navBar">
                    <li>
                        <ul id="menuLogo">
                            <li className="hamburgerMenu" onClick={() => (dispatch(toggleHamburgerMenuModal(true)))}><i className="fa-solid fa-bars"></i></li>
                            <li><NavLink to="/" className="logo" ><img className="logoPng" src={logo} alt="" /></NavLink></li>
                            {location.pathname === "/search" ? <li><button id="SearchSelectorButton" ><i className="fa-solid fa-magnifying-glass"></i><input type="text" /></button></li> : null}
                        </ul>
                    </li>
                    <li className="rightNavContainer"><ul id="rightNav">
                        {currentUser ? undefined : <li className="mobileHide"><span className="underline" onClick={() => showLogin ? null : dispatch(toggleLoginModal(true))}>Log In</span></li>}
                        {currentUser ? undefined : <li className="signupPill"><NavLink to="/signup">Sign Up</NavLink></li>}
                    {currentUser ? <>
                            <li className=" underline mobileHide"><NavLink to="/account/trips">Trips</NavLink></li>
                            {/* <li className=" underline mobileHide"><NavLink to="/inbox">Inbox</NavLink></li> */}
                            <li id="profileButttonContainer" className="mobileHide"><ProfileButton /></li>
                        </> : undefined}
                    </ul></li>

                </ul>
            </div>
        </>
    )
}

export default Navigation;