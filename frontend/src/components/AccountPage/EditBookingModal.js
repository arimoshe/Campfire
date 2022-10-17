import { useState } from "react";
import { Calendar } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { updateBooking } from "../../store/bookings";
import { toggleBookingPageModal } from "../../store/ui";

function EditBookingModal ({booking}) {

    const dispatch = useDispatch();
    const bookings = useSelector(state => Object.values(state.bookings));

    const [adults, setAdults] = useState(booking.adults);
    const [children, setChildren] = useState(booking.children);
    const [startDate, setStartDate] = useState(booking.startDate);
    const [endDate, setEndDate] = useState(booking.endDate);
    const [calValue, setCalValue] = useState([new Date(booking.startDate),new Date(booking.endDate)]);
    // const [errors, setErrors] = useState("");

    const incrementBookingGuests = (current, setter) => {
        if (adults + children < booking.spotCapacity) {
            setter(current + 1);
        }
    };

    const decrementBookingGuests = (type, current, setter) => {
        if (type === "adults") {
            if (current > 1) {
                setter( current - 1 );
            }
        }
        else {
            if (current >= 1) {
                setter(current - 1);
            } 
        }
    };
    
    

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            if (bookings) {
                let disabledRanges = []
                for (let ele of bookings) {
                    if (ele.startDate !== booking.startDate || ele.endDate !== booking.endDate) {
                        disabledRanges.push([new Date(ele.startDate), new Date(ele.endDate)])
                    }
                }
                return isWithinRanges(date, disabledRanges)
            }
        }
    }

    const isWithinRanges = (date, ranges) => {
        return ranges.some((range) => {
            return date >= range[0] && date < range[1]
        })
    }


    function onChange(nextValue) {
        if (bookings) {
            for (let book of bookings) {
                if (nextValue[0].getTime() < new Date(book.endDate).getTime() && nextValue[1].getTime() > new Date(book.startDate).getTime()) {
                    setCalValue([new Date(booking.startDate), new Date(booking.endDate)]);
                    setStartDate(new Date(booking.startDate));
                    setEndDate(new Date(booking.endDate));
                } else {
                    setCalValue(nextValue);
                    setStartDate(nextValue[0]);
                    setEndDate(nextValue[1]);

                }
            }
        }
    }


    // function onChange(nextValue) {
    //     if (nextValue[0]) {
    //         let cancelClick = false;
    //         for (let book of bookings) {
    //             if (nextValue[0].getTime() < new Date(book.start_date).getTime() && nextValue[1].getTime() > new Date(book.end_date).getTime()) {
    //                 cancelClick = true;
    //             }
    //         }
    //         if (cancelClick) {
    //             nextValue=[null,null];
    //         }

    //     }
    //     setStartDate(nextValue[0]);
    //     setEndDate(nextValue[1]);
    // };

    // const tileDisabled = ({ activeStartDate, date, view }) => {
    //     if (view === 'month') {
    //         if (bookings) {
    //             for (let ele of bookings) {
    //                 if ( date >= new Date(ele.startDate) && date <= new Date(ele.endDate)) {
    //                     return true
    //                 }
    //             }
    //             return false
    //         }

    //     }
    // }


    const handleSubmit = () => {
        if (startDate && endDate && adults >= 1) {
        dispatch(updateBooking({ adults, children, start_date: startDate, end_date: endDate }, booking.id))
            dispatch(toggleBookingPageModal(false, booking.id))
        }
    }

    const handleCancel = () => {
        dispatch(toggleBookingPageModal(false, booking.id ))
    }

    return (
        <>
            <div className="EditBookingModalContainer">
                <Calendar
                    onChange={onChange}
                    value={calValue}
                    returnValue={"range"}
                    tileDisabled={tileDisabled}
                    showDoubleView={true}
                    selectRange={true}
                    prevLabel='←'
                    nextLabel='→'
                    next2Label={null}
                    prev2Label={null}
                    minDetail='month'
                    minDate={new Date()}
                    showNeighboringMonth={false}
                />
                <div id="EditBookingGuestsModal" className="EditBookingGuestsModalContainer" >
                    <ul className='EditBookingGuestsModalList' >
                        <li className='adults'>
                            <div className="adults titlesContainer">
                                <p>ADULTS</p>
                                <p className='guestDescription'>Ages 13 or above</p>
                            </div>
                            <div className="adults togglesContainer">
                                <div onClick={() => { decrementBookingGuests("adults", adults, setAdults) }} className={`${adults <= 1 ? 'greyToggle' : null} adults toggle subtract`}>-</div>
                                <div>{adults ? adults : 0}</div>
                                <div onClick={() => { incrementBookingGuests(adults, setAdults) }} className={`${children + adults >= booking.spotCapacity ? 'greyToggle' : null} adults toggle add`}>+</div>
                            </div>
                        </li>
                        <li className='children'>
                            <div className="children titlesContainer">
                                <p>CHILDREN</p>
                                <p className='guestDescription'>Ages 12 or below</p>
                            </div>
                            <div className="adults togglesContainer">
                                <div onClick={() => { decrementBookingGuests("children", children, setChildren) }} className={`${children < 1 ? 'greyToggle' : null} children toggle subtract`}>-</div>
                                <div>{children ? children : 0}</div>
                                <div onClick={() => { incrementBookingGuests(children, setChildren) }} className={`${children + adults >= booking.spotCapacity ? 'greyToggle' : null} children toggle add`}>+</div>
                            </div>
                        </li>
                        <li id="errors"></li>
                        <li>
                            <div onClick={handleSubmit}>Request Change</div>
                            <div onClick={handleCancel}>Cancel</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EditBookingModal;