import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { logout } from "../../store/session";
import logoIcon from './../../CampfireIcon.svg'

const ProfileButton = () => {
    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch();

    const logoutUser = (e) => {
        e.preventDefault();
        dispatch(logout());
    };



    const menu =
        <div className="profileMenu" onMouseLeave={(e) => (setShowMenu(false))}>
            <ul>
                {/* <li>Name: {`${user.firstName} ${user.lastName}`}</li>
                <li>Email: {user.email}</li> */}
                <li><Link to={`/`}>Account</Link></li>
                <li><Link to={`/`}>Trips</Link></li>
                <li><Link to={`/`}>Host A Spot</Link></li>
                <li><Link to={`/`}>About Campfire</Link></li>
                <li onClick={logoutUser}>Log out</li>
            </ul>
        </div>;

    return (
        <>
            <div className="profileButton" onMouseOver={(e)=>(setShowMenu(true))}>
                <img className="logoIcon" src={logoIcon} alt="icon" />
            </div>
            {showMenu ? menu : undefined}
        </>
    )
}

export default ProfileButton