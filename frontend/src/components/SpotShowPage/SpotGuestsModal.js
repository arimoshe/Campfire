import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { updateStoreFilter } from '../../store/filters';
import './Calendar.css';


function SpotGuestsModal({ spot }) {

    const dispatch = useDispatch();

    const guests = useSelector(state => state.filters.guests);


    const incrementGuests = (guestType, currentGuests) => {
        if (currentGuests.adults + currentGuests.children < spot.capacity) {
            dispatch(updateStoreFilter({guests:{ ...currentGuests, [guestType]: (currentGuests[guestType] + 1) }}))
        }
    }
    
    const decrementGuests = (guestType, currentGuests) => {
        if (currentGuests[guestType] > 1 || (currentGuests[guestType] === 1 && currentGuests.adults + currentGuests.children >1)) {
            dispatch(updateStoreFilter({ guests: { ...currentGuests, [guestType]: (currentGuests[guestType] - 1) } }))
        }
    }

    useEffect(()=>{
        const ele = document.getElementsByClassName(`adults toggle subtract`)[0]
        const ele2 = document.getElementsByClassName(`adults toggle add`)[0]
        if ((guests.adults > 1 || (guests.adults === 1 && guests.adults + guests.children > 1))) {
            if (ele.classList.contains("greyToggle")) ele.classList.remove("greyToggle")
        } else {
            if (!ele.classList.contains("greyToggle")) ele.classList.add("greyToggle")
        }
        if (guests.children + guests.adults < spot.capacity) {
            if (ele2.classList.contains("greyToggle")) ele2.classList.remove("greyToggle")
        } else {
            if (!ele2.classList.contains("greyToggle")) ele2.classList.add("greyToggle")
        }


        const ele3 = document.getElementsByClassName(`children toggle subtract`)[0]
        const ele4 = document.getElementsByClassName(`children toggle add`)[0]
        if ((guests.children > 1 || (guests.children === 1 && guests.adults + guests.children > 1))) {
            if (ele3.classList.contains("greyToggle")) ele3.classList.remove("greyToggle")
        } else {
            if (!ele3.classList.contains("greyToggle")) ele3.classList.add("greyToggle")
        }
        if (guests.children + guests.adults < spot.capacity ) {
            if (ele4.classList.contains("greyToggle")) ele4.classList.remove("greyToggle")
        } else {
            if (!ele4.classList.contains("greyToggle")) ele4.classList.add("greyToggle")
        }
    },[guests])


    return (
        <>
            <div id="SpotGuestsModal" className="SpotGuestsModalContainer" >
                <ul className='SpotGuestsModalList' >
                    <li className='adults'>
                        <div className="adults titlesContainer">
                            <p>ADULTS</p>
                            <p className='guestDescription'>Ages 13 or above</p>
                        </div>
                        <div className="adults togglesContainer">
                            <div onClick={() => { decrementGuests("adults", guests) }} className="adults toggle subtract">-</div>
                            <div>{guests ? guests.adults : 0}</div>
                            <div onClick={() => { incrementGuests("adults", guests) }} className="adults toggle add">+</div>
                        </div>
                    </li>
                    <li className='children'>
                        <div className="children titlesContainer">
                            <p>CHILDREN</p>
                            <p className='guestDescription'>Ages 12 or below</p>
                        </div>
                        <div className="adults togglesContainer">
                            <div onClick={() => { decrementGuests("children", guests) }} className="children toggle subtract">-</div>
                            <div>{guests ? guests.children : 0}</div>
                            <div onClick={() => { incrementGuests("children", guests) }} className="children toggle add">+</div>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </div>
            
        </>
    )
}


export default SpotGuestsModal