import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { logout } from "../../store/session";

const ProfileButton = () => {
    const [showMenu, setShowMenu] = useState(false)
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const logoutUser = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    // const openMenu = () => {
    //     if (showMenu)
    //         setShowMenu(true)
    // }

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setShowMenu(true);
    //     openMenu();
    // }

    // useEffect(() => {
    //     const closeMenu = () => {
    //         setShowMenu(false);
    //     }
    //     if (showMenu) window.addEventListener('click', closeMenu);
    //     return () => window.removeEventListener('click', closeMenu)
    // }, [showMenu])


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
                <i className="fa-solid fa-user" ></i>
            </div>
            {showMenu ? menu : undefined}
        </>
    )
}

export default ProfileButton