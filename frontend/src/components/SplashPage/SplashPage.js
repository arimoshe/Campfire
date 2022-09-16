import { useDispatch } from 'react-redux';
import { toggleSplashDatesModal, toggleSplashGuestsModal } from '../../store/ui';
import SplashDouble from './SplashDouble';
import './SplashPage.css'
import SplashSearchBar from './SplashSearchBar';

function SplashPage () {
    const dispatch = useDispatch()
    const hideModal = (event) => {
        const dateModal = document.getElementById("SplashDateModal")
        const guestsModal = document.getElementById("SplashGuestsModal")
        if (dateModal && !dateModal.contains(event.target)) {
            dispatch(toggleSplashDatesModal(false))
        }
        if (guestsModal && !guestsModal.contains(event.target)) {
            dispatch(toggleSplashGuestsModal(false))
        }
    }

    return(
        <>
            <div onClick={hideModal} className="pageContainer">
            <div className="SplashContainer">
                <div className="SplashTextContainer">
                    <h1>Explore the great outdoors.</h1>
                    <h2>Browse and book tent spots, RV spaces, cabins, treehouses, glamping and more.</h2>
                </div>
                <SplashSearchBar />
                <SplashDouble />
                <div></div>

            </div>
        </div>
        </>
    )
}

export default SplashPage;