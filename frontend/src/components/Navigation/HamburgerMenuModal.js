import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../store/session";
import { toggleHamburgerMenuModal, toggleLoginModal } from "../../store/ui";


const HamburgerMenuModal = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)

    const logoutUser = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const closeLogout =  (e) => {
        logoutUser(e);
        dispatch(dispatch(toggleHamburgerMenuModal(false)));
    }

    return (
        <>
            <ul className="hamburgerMenuContainer">
                <li  onClick={() => (dispatch(toggleHamburgerMenuModal(false)))} id="closeXLi"><i className="fa-solid fa-xmark"></i></li>
                <Link to={`/`} >
                    <li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p>Home</p><i className="fa-solid fa-angle-right"></i></li>
                </Link>
                <li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p><a href="https://www.linkedin.com/in/ari-moshe">LinkedIn</a></p><i className="fa-solid fa-angle-right"></i></li>
                <li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p><a href="https://github.com/arimoshe">GitHub</a></p><i className="fa-solid fa-angle-right"></i></li>
                {currentUser ? <Link to={`/account`} ><li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p>Account</p><i className="fa-solid fa-angle-right"></i></li></Link > :null}
                {currentUser ? <Link to={`/account/trips`} ><li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p>Trips</p><i className="fa-solid fa-angle-right"></i></li></Link > : null}
                {currentUser ? <li onClick={closeLogout}><p>Log Out</p><i className="fa-solid fa-angle-right"></i></li> : <li onClick={() => (dispatch(toggleLoginModal(true)))}><p>Log in</p><i className="fa-solid fa-angle-right"></i></li>}
            </ul>
        </>
    )
}


export default HamburgerMenuModal