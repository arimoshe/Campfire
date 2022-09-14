import { useDispatch } from "react-redux";
import { cancelBooking } from "../../store/bookings";


function AccountBookingIndexItem ({booking}) {
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const dispatch = useDispatch()

    return (
        <>
            <div>
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
                                {new Date().getTime() < new Date(booking.endDate).getTime() ? <button className="EditTrip">Request Trip Change</button> : null}
                                {new Date().getTime() < new Date(booking.endDate).getTime() ? <button onClick={(e) => (dispatch(cancelBooking(booking.id)))} className="CancelTrip">Cancel Stay</button> : null}
                                {new Date().getTime() >= new Date(booking.endDate).getTime() ? <button className="TripReview">Add Your Review</button> : null}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AccountBookingIndexItem