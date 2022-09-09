import { useSelector } from "react-redux"
import SpotDateModal from "./SpotDateModal"


function SpotAvailability({ spot }) {

    const filters = useSelector(state => state.filters)

    if (!spot) return null

    return (
        <>
            <div className="SpotAvailabilityContainer" >
            Availability
                <div className="SpotAvailabilitySelectorsContainer">
                    <div className="SpotDateSelectorContainer">
                        DATES
                        <button id="SpotDatesSelectorButton"><i class="fa-solid fa-calendar"></i>{filters && filters.startDate ? `${filters.startDate.toLocaleDateString()} - ${filters.endDate.toLocaleDateString() }` : 'Enter dates'}</button>
                        <SpotDateModal spot={spot} />
                    </div>
                    <div className="SpotGuestsSelectorContainer">
                        GUESTS
                        <button id="SpotGuestsSelectorButton"><i class="fa-solid fa-calendar"></i>{'Add guests'}</button>
                        
                    </div>
                    <button className="checkAvailibilityPill">Check availability</button>
                </div>
            </div>
            
        </>
    )
}


export default SpotAvailability