import { NavLink } from "react-router-dom"
import logo from './../../CampfireLogo.png'


function AccountNavigation() {

    return (
        <>
        <div className="AccountNavContainer">
            <ul className="AccountNavBar">
                <li><NavLink to="/" className="logo" ><img className="logoPng" src={logo} alt="logo" /></NavLink></li>
                <li><NavLink className='AccountNavLink' to="/account" />Account</li>
                <li><NavLink className='AccountNavLink' to="/account/boookings" />Bookings</li>
            </ul>
        </div>
        </>
    )
}

export default AccountNavigation