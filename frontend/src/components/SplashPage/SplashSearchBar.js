import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleSplashDatesModal, toggleSplashGuestsModal } from "../../store/ui";
import SplashDateModal from "./SplashDateModal";
import SplashGuestsModal from "./SplashGuestsModal";

import tent from '../../dominik-jirovsky-re2LZOB2XvY-unsplash.jpg'
import { updateStoreFilter } from "../../store/filters";
import { useEffect, useRef } from "react";

function SplashSearchBar () {
    const history = useHistory();
   
    const showSplashDatesModal = useSelector(state => state.ui.showSplashDatesModal)
    const showSlashGuestsModal = useSelector(state => state.ui.showSlashGuestsModal)
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const auto = useRef();
    const AutoCompleteRef = useRef();

    const handleClick = () => {
        
        history.push('/search')
    }

    const options = {
        fields: ['geometry'],
        componentRestrictions: { 'country': ['US'] }
    }

    useEffect(() => {
        if(window.google) {
            AutoCompleteRef.current = new window.google.maps.places.Autocomplete(
                auto.current,
                options
            );

            AutoCompleteRef.current.addListener("place_changed", async function () {
                const place = await AutoCompleteRef.current.getPlace();
                const filterObj = { 
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                }
                dispatch(updateStoreFilter(filterObj    ))
            })
        }
    }, [window.google])


    if (!filters) {return null}

    return(
        <>
        <div className="SearchContainer">    
            <div className="SplashSearchBarContainer">
                <div className="splashSearchInputs">
                    <div className="SearchInputContainer splash">
                        WHERE TO?
                        <button id="SearchSelectorButton" ><i className="fa-solid fa-magnifying-glass"></i><input ref={auto} type="text" placeholder="Try Yellowstone, Bay Area, Utah... "/></button>
                        
                    </div>
                    <div className="DateSelectorContainer splash">
                        DATES
                            <button onClick={() => (dispatch(toggleSplashDatesModal(true)))} id="splashDatesSelectorButton" ><i className="fa-solid fa-calendar"></i>{filters && filters.startDate ? `${filters.startDate.toLocaleDateString()} - ${filters.endDate.toLocaleDateString()}` : 'Enter dates'}</button>
                            {showSplashDatesModal ? <SplashDateModal /> : null} 
                    </div>
                    <div className="GuestsSelectorContainer splash">
                        GUESTS
                            <button onClick={() => (dispatch(toggleSplashGuestsModal(true)))} id="splashGuestsSelectorButton" ><i className="fa-solid fa-user"></i>{filters && (filters.children + filters.adults) > 0 ? `${filters.children + filters.adults} ${filters.children + filters.adults === 1 ? 'Guest' : 'Guests'}` : 'Add guests'}</button>
                            {showSlashGuestsModal ? <SplashGuestsModal /> : null }
                    </div>
                </div>
                <button onClick={handleClick} className="searchPill"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div className="imageContainer">
                <img className="searchImage" src={tent} alt="Great Outdoors"/>
        </div>
        </>
    )

}

export default SplashSearchBar;