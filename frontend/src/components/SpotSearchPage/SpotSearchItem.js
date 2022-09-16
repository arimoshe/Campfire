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
                    <li className="spotsSearchDescriptionReviews"></li>
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


{/* <div>
        <ul className="BookingsList">
            <li>
                <div className="BookingListImgContainer"><img src={booking.spotImageUrl} alt="campsite" /></div>
            </li>
            <li>
                <div className="BookingListInfoContainer">
                    <div className="BookingListInfoLeft">
                        <div className={new Date().getTime() >= new Date(booking.endDate).getTime() ? `PastPill` : `FuturePill`}>{new Date().getTime() < new Date(booking.endDate).getTime() ? `Upcoming Trip` : `Past Trip`}</div>
                        <h2 className="SpotName">{booking.spotName}</h2>
                        <h3 className="SpotLocation">{`in ${booking.spotCity}, ${booking.spotState}`}</h3>
                        <h3> {new Date(booking.startDate).toLocaleDateString("en-us", dateOptions)} to {new Date(booking.endDate).toLocaleDateString("en-us", dateOptions)} </h3>
                        <h3>  {booking.adults || booking.children ? booking.adults + booking.children === 1 ? `${booking.adults + booking.children} Guest` : `${booking.adults + booking.children} Guests` : null}   ({booking.adults ? booking.adults === 1 ? `${booking.adults} Adult` : `${booking.adults} Adults` : null}{booking.children ? `, ` : null}{booking.children ? booking.children === 1 ? `${booking.children} Child` : `${booking.children} Children` : null})</h3>
                    </div>
                    <div className="BookingListInfoRight">
                        {new Date().getTime() < new Date(booking.endDate).getTime() ? <button onClick={handleChangeClick} className="EditTrip">Request Trip Change</button> : null}
                        {new Date().getTime() < new Date(booking.endDate).getTime() ? <button onClick={(e) => (dispatch(cancelBooking(booking.id)))} className="CancelTrip">Cancel Trip</button> : null}
                        {new Date().getTime() >= new Date(booking.endDate).getTime() ? <button onClick={handleChangeClick} className="TripReview">Add Your Review</button> : null}
                    </div>
                </div>
                {(new Date().getTime() < new Date(booking.endDate).getTime()) && (showEditBookingModal && showEditBookingModal[booking.id]) ? <EditBookingModal booking={booking} /> : null}
                {(new Date().getTime() >= new Date(booking.endDate).getTime()) && (showEditBookingModal && showEditBookingModal[booking.id]) ? <CreateReviewModal booking={booking} /> :  null}
            </li>
        </ul>
    </div> */}