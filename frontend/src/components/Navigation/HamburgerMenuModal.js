import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toggleHamburgerMenuModal, toggleLoginModal } from "../../store/ui";


const HamburgerMenuModal = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)
    return (
        <>
            <ul className="hamburgerMenuContainer">
                <li  onClick={() => (dispatch(toggleHamburgerMenuModal(false)))} id="closeXLi"><i className="fa-solid fa-xmark"></i></li>
                <Link to={`/`} >
                    <li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p>Home</p><i className="fa-solid fa-angle-right"></i></li>
                </Link>
                <Link to={`/near-me`} >
                    <li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p>Near Me</p><i className="fa-solid fa-angle-right"></i></li>
                </Link>
                <Link to={`/about`} >
                    <li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p>About</p><i className="fa-solid fa-angle-right"></i></li>
                </Link>
                <Link to={`/`} >
                    <li onClick={() => (dispatch(toggleHamburgerMenuModal(false)))}><p>Start Hosting</p><i className="fa-solid fa-angle-right"></i></li>
                </Link >  
                {currentUser ? null : <li onClick={() => (dispatch(toggleLoginModal(true)))}><p>Log in</p><i className="fa-solid fa-angle-right"></i></li>}
            </ul>
        </>
    )
}


export default HamburgerMenuModal