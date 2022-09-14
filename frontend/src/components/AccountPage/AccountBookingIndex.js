import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBookings } from "../../store/bookings";
import AccountBookingIndexItem from "./AccountBookingIndexItem";

function AccountBookingIndex() {
    const dispatch = useDispatch();
    const bookings = useSelector(state => Object.values(state.bookings))
    
    useEffect(()=>{
        dispatch(fetchBookings());
    },[dispatch])

    if (!bookings) {return null}

    return (
        <>
        <div className="AccountBookingsOuterContainer">
            <ul>
                {bookings.map((booking)=>(<li key={booking.id}>{<AccountBookingIndexItem booking={booking}/>}</li>))}
            </ul>
        </div>
        </>
    )
}

export default AccountBookingIndex