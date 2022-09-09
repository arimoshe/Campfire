import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchSpot } from "../../store/spots"
import ReviewsLocationWidget from "./ReviewsLocationWidget"
import SpotDescription from "./SpotDescription"
import SpotImages from "./SpotImages"
import './SpotShow.css'
import SpotSizeType from "./SpotSizeType"


function SpotShow() {

    const dispatch = useDispatch()
    const {spotId} = useParams()
    useEffect(()=> {
        dispatch(fetchSpot(spotId))
    },[dispatch])

    const spot = useSelector(state => state.spots.currentSpot)
    if (!spot) return null

    return (
        <>
            <div className="siteBody">
                <div className="spotContainer">
                    <h1 className="headerName">{spot.name}</h1>
                    <ReviewsLocationWidget spot={spot} />
                    <SpotImages spot={spot}/>
                    <SpotSizeType spot={spot} />
                    <SpotDescription spot={spot} />
                </div>
            </div>
        </>
    )
}

export default SpotShow