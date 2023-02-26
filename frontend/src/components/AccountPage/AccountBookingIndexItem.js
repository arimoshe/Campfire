import { useDispatch, useSelector } from "react-redux";
import { cancelBooking } from "../../store/bookings";
import { hideAllBookingsPageModals, toggleBookingPageModal } from "../../store/ui";
import CreateEditReviewModal from "./CreateEditReviewModal";
import EditBookingModal from "./EditBookingModal";


function AccountBookingIndexItem ({bookingId}) {
    const booking = useSelector(state => state.bookings[bookingId]);
    const showEditBookingModal = useSelector(state => state.ui.showBookingPageModal);
    const review = useSelector(state => state.bookings[booking.id].spotReview);

    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const dispatch = useDispatch()

    const handleChangeClick = () => {
        dispatch(hideAllBookingsPageModals())
        dispatch(toggleBookingPageModal(true, booking.id))
        setTimeout(()=> {

            let element = document.getElementsByClassName("CreateReviewModalContainer")[0];
            let element2 = document.getElementsByClassName("EditBookingModalContainer")[0];
            
            if (element) {element.style.height = '100%';}
            if (element2) { element2.style.height = '100%'; }

        }, 100)
    }

    const reviewButton = () => {
        if (review.length > 0) {
            return (<button onClick={handleChangeClick} className="TripReview">Edit Your Review</button>)
        } else {
            return (<button onClick={handleChangeClick} className="TripReview">Add Your Review</button>)
        }
    }


    return (
        <>
            <ul className="BookingsList">
                <li>
                    <div className="BookingListImgContainer"><img src={booking.spotImageUrl} alt="campsite" /></div>
                </li>
                <li>
                    <div className="BookingListInfoContainer">
                        <div className="BookingListInfoLeft"> 
                            <div className={new Date().getTime() >= new Date(booking.endDate).getTime() ? `PastPill` : `FuturePill`}>{new Date().getTime() < new Date(booking.endDate).getTime() ? `Upcoming Trip` : `Past Trip`}</div>
                            <h2 className="accountSpotName">{booking.spotName}</h2>
                            <h3 className="SpotLocation">{`in ${booking.spotCity}, ${booking.spotState}`}</h3>
                            <h3> {new Date(booking.startDate).toLocaleDateString("en-us", dateOptions)} to {new Date(booking.endDate).toLocaleDateString("en-us", dateOptions)} </h3>
                            <h3>  {booking.adults || booking.children ? booking.adults + booking.children === 1 ? `${booking.adults + booking.children} Guest` : `${booking.adults + booking.children} Guests` : null}   ({booking.adults ? booking.adults === 1 ? `${booking.adults} Adult` : `${booking.adults} Adults` : null}{booking.children ? `, ` : null}{booking.children ? booking.children === 1 ? `${booking.children} Child` : `${booking.children} Children` : null})</h3>
                        </div>
                        <div className="BookingListInfoRight">
                            {new Date().getTime() < new Date(booking.endDate).getTime() ? <button onClick={handleChangeClick} className="EditTrip">Request Trip Change</button> : null}
                            {new Date().getTime() < new Date(booking.endDate).getTime() ? <button onClick={(e) => (dispatch(cancelBooking(booking.id)))} className="CancelTrip">Cancel Trip</button> : null}
                            {new Date().getTime() >= new Date(booking.endDate).getTime() ? reviewButton() : null}
                        </div>
                    </div>
                    {(new Date().getTime() < new Date(booking.endDate).getTime()) && (showEditBookingModal && showEditBookingModal[booking.id]) ? <EditBookingModal booking={booking} /> : null}
                    {(new Date().getTime() >= new Date(booking.endDate).getTime()) && (showEditBookingModal && showEditBookingModal[booking.id]) ? <CreateEditReviewModal bookingId={booking.id} /> :  null}
                </li>
            </ul>
            
        </>
    )
}

export default AccountBookingIndexItem