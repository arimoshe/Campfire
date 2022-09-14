import { Link, NavLink } from "react-router-dom"
import logo from './../../CampfireLogo.png'


function AccountNavigation() {

    return (
        <>
            <div className="AccountNavOuterContainer">
            <div className="AccountNavContainer">
                <ul className="AccountNavBar">
                        <li className="AccountPageLogo"><Link to="/" className="" ><img className="logoPng" src={logo} alt="logo" /></Link></li>
                    <li><NavLink className='AccountNavLink' exact to="/account" >Account</NavLink></li>
                    <li><NavLink className='AccountNavLink' to="/account/bookings" >Trips</NavLink></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default AccountNavigation