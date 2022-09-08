import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchSpot } from "../../store/spots"


function SpotShow() {

    const dispatch = useDispatch()
    const {spotId} = useParams()
    useEffect(()=> {
        dispatch(fetchSpot(spotId))
    },[dispatch])
    const spot = useSelector(state => state.spots.currentSpot)


    return (
        <>
            <div className="siteBody">
                <h1>{spot ? spot.name : null}</h1>
                <img src={spot ? spot.photoUrls[0] : null }  />
            
            </div>
        </>
    )
}

export default SpotShow