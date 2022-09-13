import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchSpot } from "../../store/spots"
import { toggleSpotDatesModal, toggleSpotGuestsModal } from "../../store/ui"
import ReviewsLocationWidget from "./ReviewsLocationWidget"
import SpotActivities from "./SpotActivities"
import SpotAvailability from "./SpotAvailability"
import SpotDescription from "./SpotDescription"
import SpotImages from "./SpotImages"
import SpotMapWrapper from "./SpotMapWrapper"
import SpotNaturalFeatures from "./SpotNaturalFeatures"
import './SpotShow.css'
import SpotSizeType from "./SpotSizeType"

function SpotShow() {
    
    const dispatch = useDispatch()
    const {spotId} = useParams()
    

    const hideModal = (event) => {
        const dateModal = document.getElementById("SpotDateModal")
        const guestsModal = document.getElementById("SpotGuestsModal")
        if (dateModal && !dateModal.contains(event.target)) {
            dispatch(toggleSpotDatesModal(false))
        }
        if (guestsModal && !guestsModal.contains(event.target)) {
            dispatch(toggleSpotGuestsModal(false))
        }
    }

    useEffect(()=> {
        dispatch(fetchSpot(spotId))
    }, [dispatch, spotId])

    const spot = useSelector(state => state.spots.currentSpot)
    if (!spot) return null

    return (
        <>
            <div id="spotShow" className="siteBody" onClick={hideModal}  >
                <div className="spotContainer">
                    <h1 className="headerName">{spot.name}</h1>
                    <ReviewsLocationWidget spot={spot} />
                    <SpotImages spot={spot}/>
                    <div className="InfoContainer">
                        <div>
                        <SpotSizeType spot={spot} />
                        <SpotDescription spot={spot} />
                        </div>
                        <SpotActivities spot={spot} />
                        <SpotNaturalFeatures spot={spot} />
                    </div>
                    <div className="hr"></div>
                    <SpotAvailability spot={spot} />
                    <div className="hr"></div>
                    <SpotMapWrapper spot={spot} apiKey={process.env.REACT_APP_MAPS_API_KEY} />
                </div>
            </div>
        </>
    )
}

export default SpotShow