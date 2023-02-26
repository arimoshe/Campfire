import { Link, NavLink, Redirect } from "react-router-dom"
import logo from './../../CampfireLogo.png'
import ProfileButton from "../Navigation/ProfileButton";
import HamburgerMenuModal from "../Navigation/HamburgerMenuModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburgerMenuModal } from "../../store/ui";

function AccountNavigation() {

    const sessionUser = useSelector(state => state.session.user);
    const showMenu = useSelector(state => state.ui.hamburgerMenuModal)
    const dispatch = useDispatch();

    if (!sessionUser) {

        return (
            <Redirect to="/" />
        );
    }

    return (
        <>
            {showMenu ? <HamburgerMenuModal /> : null}
            <div className="AccountNavOuterContainer">
            <div className="AccountNavContainer">
                <ul className="AccountNavBar">
                        <li className="hamburgerMenu" onClick={() => (dispatch(toggleHamburgerMenuModal(true)))}><i className="fa-solid fa-bars"></i></li>
                        <li className="AccountPageLogo"><Link to="/" className="" ><img className="logoPng" src={logo} alt="logo" /></Link></li>
                        <NavLink className='AccountNavLink' exact to="/account" ><li>Account</li></NavLink>
                        <NavLink className='AccountNavLink' to="/account/trips" ><li>Trips</li></NavLink>
                </ul>
                <ul>
                    <li id="profileButttonContainer" className="mobileHide"><ProfileButton /></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default AccountNavigation