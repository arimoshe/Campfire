import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBookings } from "../../store/bookings";
import AccountBookingIndexItem from "./AccountBookingIndexItem";

function AccountBookingIndex() {
    const dispatch = useDispatch();
    const bookings = useSelector(state => Object.values(state.bookings)).sort((a, b) => {return new Date(a.endDate).getTime() > new Date(b.startDate).getTime() ? -1 : 1})
    
    useEffect(()=>{
        dispatch(fetchBookings());
    },[dispatch])

    if (!bookings) {return null}

    return (
        <>
        <div className="AccountBookingsOuterContainer">
            <ul>
                { bookings.length > 0 ? bookings.map((booking)=>(<li key={booking.id}>{<AccountBookingIndexItem bookingId={booking.id}/>}</li>)) : <li>You haven't booked any trips yet</li>}
            </ul>
        </div>
        </>
    )
}

export default AccountBookingIndex