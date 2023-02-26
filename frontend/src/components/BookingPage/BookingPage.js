import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitBooking } from "../../store/bookings";
import { fetchSpot } from "../../store/spots";
import { toggleLoginModal } from "../../store/ui";
import { useHistory } from "react-router-dom";
import './BookingPage.css'

function BookingPage () {   
    const session = useSelector(state => state.session)
    const loginModal = useSelector(state => state.ui.loginModal)
    const spot = useSelector(state => state.spots.currentSpot)
    const cookies = document.cookie.split('; ').reduce((prev, current) => { return { ...prev, [current.split('=')[0]]: decodeURIComponent(current.split('=')[1]) } }, {})
    const dispatch = useDispatch()
    const history = useHistory();
    cookies.booking=JSON.parse(cookies.booking)
    

    const handleBooking = (e) => {
        e.preventDefault()
        const bookingObj = {
            customer_id: session.user.id,
            owner_id: cookies.booking.ownerId,
            spot_id:cookies.booking.spotId,
            start_date: new Date(cookies.booking.startDate),
            end_date: new Date(cookies.booking.endDate),
            adults: cookies.booking.adults,
            children: cookies.booking.children,
            price: cookies.booking.price
        }
        dispatch(submitBooking(bookingObj))
        document.cookie = "booking=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        history.push('/account/trips')
    }

    
    useEffect(()=>{
        window.scrollTo(0,0);
        if (cookies.booking) {
            dispatch(fetchSpot(cookies.booking.spotId))
        }

        if (session) {
            if (!session.user) {
                dispatch(toggleLoginModal(true))
            } 
            
        }
    
    }, [loginModal,  dispatch ])
    

    if (!spot) {
        return null
    }
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };

    return (
        <>
        <div id="bookingPage" className="siteBody" >
            <div className="BookingContainer">
                <div className="InfoForm">
                    <div>Payment details:</div>
                    <form>
                        <label>Card Number</label>
                        <input id="CardNumber" type="text"  value="5555 5555 5555 5555" readOnly/>
                        <label>Expiration</label>
                        <input id="CardExpiration" type="text" value="05/25" readOnly/>
                        <label>CVC</label>
                            <input id="CardCCC" type="text" value="555" readOnly />
                        <label>Zip Code</label>
                            <input id="CardZip" type="text" value="55555" readOnly />

                    </form>
                </div>
                <div className="BookingDetails">
                        <div className="BookingImgContainer"><img src={spot.photoUrls[0]} alt="campsite" /></div>
                    <div className="location">
                        <h4>Your Trip To:</h4>
                        <p>{cookies.booking.siteName}</p>
                    </div>
                    <div className="dates">  
                        <p>
                            {new Date(cookies.booking.startDate).toLocaleDateString("en-us", dateOptions)} to {new Date(cookies.booking.endDate).toLocaleDateString("en-us", dateOptions)}
                        </p>
                    </div>
                    <div className="guests">
                        <p>{cookies.booking.adults ? cookies.booking.adults === 1 ? `${cookies.booking.adults} Adult` : `${cookies.booking.adults} Adults` :null}</p>
                        <p>{cookies.booking.children ? cookies.booking.children === 1 ? `${cookies.booking.children} Child` : `${cookies.booking.children} Children` : null}</p>
                    </div>
                    <hr />
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>${cookies.booking.price}.00</p>
                    </div>
                    <div className="fees">
                        <p>Service Fees</p>
                        <p>$5.00</p>
                    </div>
                    <div className="subtotal">
                        <p>Total</p>
                        <p>${cookies.booking.price+5}.00</p>
                    </div>
                        <button onClick={handleBooking}>Book Now</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default BookingPage;