import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function SpotSearchItem({spot}) {
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/spots/${spot.id}`)
    }
    
    if (!spot) {return null}

    return (

        <>
            <div onClick={handleClick} className="SpotSearchItemContainer">
                <div className="SpotsSearchItemImgContainer">
                    <div className="spotsSearchWidget"></div>
                    <div className="SpotsSearchItemImg"><img src={spot.photoUrls} alt="Campsite" /></div>
                </div>
                <ul className="spotsSearchDescriptionItems">
                    {spot.totalReviews > 0 && spot.recommendedReviews / spot.totalReviews >= .5 ? <><li className="spotsSearchDescriptionReviews"><span className="recommended"><i className="fa-solid fa-thumbs-up"></i>{Math.floor(100 * (spot.recommendedReviews / spot.totalReviews))}%</span> ({spot.totalReviews}) </li> </>: null }
                    <li className="SpotName">{spot.name}</li>
                    <li className="spotsSearchDescriptionTypes">
                        Up to {spot.capacity} Guests • {spot.lodging > 0 ? <>Lodging<span>, </span></> : null}{spot.rvs > 0 ? <>RVs<span>, </span></> : null}{spot.tents > 0 ? <>Tents<span>, </span></> : null}
                        
                    </li>
                    <li>{`${spot.acres} acres • ${spot.city}, ${spot.state} `} </li>
                    <li>from <span>${spot.price} per night</span></li>
                </ul>
            </div>
        </>
    )
}

export default SpotSearchItem;

