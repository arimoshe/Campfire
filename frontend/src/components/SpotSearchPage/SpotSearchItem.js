import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import logoIcon from './../../CampfireIconBorderShadow.svg'

function SpotSearchItem({spot, pins}) {
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/spots/${spot.id}`)
    }
    
    const handleMouseOver = () => {
        if (pins.current[spot.id]) {
            const icon = {
                url: logoIcon,
                scaledSize: new window.google.maps.Size(70, 70),
                anchor: new window.google.maps.Point(35, 70)
            }
            pins.current[spot.id].setIcon(icon)
        }
    };

    const handleMouseLeave = () => {
        if (pins.current[spot.id]) {
            const icon = {
                url: logoIcon,
                scaledSize: new window.google.maps.Size(40, 40),
                anchor: new window.google.maps.Point(20, 40)
            }
            pins.current[spot.id].setIcon(icon)
        }
    };


    if (!spot) {return null}

    return (

        <>
            <div onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave} id={"spot" + spot.id} className="SpotSearchItemContainer">
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

