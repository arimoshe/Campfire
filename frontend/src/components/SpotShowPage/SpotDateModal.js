import { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { updateStoreFilter } from '../../store/filters';
import './Calendar.css';


function SpotDateModal({ spot }) {

   const dispatch = useDispatch();

    
    const [calValue, setCalValue] = useState(null);

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            if (spot && spot.bookings) {
                let disabledRanges=[]
                for (let booking of spot.bookings) {
                    disabledRanges.push([new Date(booking.start_date), new Date(booking.end_date)])
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

    if (!spot) return null

    function onChange(nextValue) {
        if (spot && spot.bookings) {
            for (let booking of spot.bookings) {
                if (nextValue[0].getTime() < new Date(booking.end_date).getTime() && nextValue[1].getTime() > new Date(booking.start_date).getTime()) {
                     setCalValue(null)
                    return dispatch(updateStoreFilter({ startDate: null, endDate: null }))
                } else {
                    setCalValue(nextValue)
                } 

            }
        } 
        dispatch(updateStoreFilter({startDate: nextValue[0], endDate: nextValue[1]}))
    }





    
    return (
        <>
            <div id="SpotDateModal" className="SpotDateModalContainer" >
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
            </div>
            
        </>
    )
}


export default SpotDateModal