import { Link, NavLink, Redirect } from "react-router-dom"
import logo from './../../CampfireLogo.png'
import ProfileButton from "../Navigation/ProfileButton";
import { useSelector } from "react-redux";


function AccountNavigation() {

    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) {

        return (
            <Redirect to="/" />
        );
    }

    return (
        <>
            <div className="AccountNavOuterContainer">
            <div className="AccountNavContainer">
                <ul className="AccountNavBar">
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