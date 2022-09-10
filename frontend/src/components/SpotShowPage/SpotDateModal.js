import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { updateStoreFilter } from '../../store/filters';
import './Calendar.css';


function SpotDateModal({ spot }) {

   const dispatch = useDispatch();

    const [value, setValue] = useState(new Date());

    const tileDisabled = ({ activeStartDate, date, view }) => {
        const now = new Date();
        if (view === 'month') {
            if (spot && spot.bookings) {
                for (let booking of spot.bookings) {
                    if (date.getTime() > Date.parse(booking.start_date) && date.getTime() < Date.parse(booking.end_date)) {
                        return true
                    }
                }    
                return false      
            }
        
        }
    }

    if (!spot) return null
    function onChange(nextValue) {
        setValue(nextValue);
        dispatch(updateStoreFilter({startDate: nextValue[0], endDate: nextValue[1]}))
    }

    return (
        <>
            <div className="SpotDateModalContainer" >
                <Calendar
                    onChange={onChange}
                    value={value} 
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