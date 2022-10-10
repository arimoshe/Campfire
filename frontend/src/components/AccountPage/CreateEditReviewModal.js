import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, submitReview, updateReview } from "../../store/reviews";
import { toggleBookingPageModal } from "../../store/ui";


function CreateEditReviewModal ({bookingId}) {
    const booking = useSelector(state => state.bookings[bookingId]);
    const dispatch = useDispatch();
    const [recommended, setRecommended] = useState('yes');
    const [body, setBody] = useState('Write Your Review Here...');
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user)


    

    useEffect(() => {
        
        if (booking.spotReview.length > 0) {
            console.log(booking.spotReview[0], booking.spotReview[0].recommended, booking.spotReview[0].body );
            if (booking.spotReview[0].recommended) {
                setRecommended('yes');
            } else { setRecommended('no'); }
            setBody(booking.spotReview[0].body);
        }
    },[booking])

    const handleChange = (e) => {
        setRecommended(e.target.value);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteReview(booking.spotReview[0].id, booking.id))
        .then(
            dispatch(toggleBookingPageModal(false, booking.id))
        )
    }

    const removeDefault = (e) => {
        if (e.target.value === 'Write Your Review Here...') {
            setBody("");
        }
    }

    const handleTextChange = (e) => {
        setBody(e.target.value);
    }

    const handleCancel = () => {
        dispatch(toggleBookingPageModal(false, booking.id))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewObject = {
            spot_id: booking.spotId,
            recommended: recommended === "yes",
            author_id: user.id,
            body: body
        };
        setErrors([]);
        if (booking.spotReview.length > 0) {
            reviewObject.id = booking.spotReview[0].id;
            console.log(reviewObject)
            dispatch(updateReview(reviewObject, booking.id))
                .catch(async (res) => {
                    let data;
                    try {
                        data = await res.clone().json();
                    }
                    catch {
                        data = await res.text();
                    }
                    if (data && data.errors) { setErrors(data.errors); }
                    else if (data) { setErrors([data]); }
                    else { setErrors([res.statusText]); }
                })
            if (errors.length < 1) { dispatch(toggleBookingPageModal(false, booking.id)) }
        }
        else {
            dispatch(submitReview(reviewObject, booking.id))
                .catch(async (res) => {
                    let data;
                    try {
                        data = await res.clone().json();
                    }
                    catch {
                        data = await res.text();
                    }
                    if (data && data.errors) { setErrors(data.errors); }
                    else if (data) { setErrors([data]); }
                    else { setErrors([res.statusText]); }
                })
                if (errors.length < 1) {dispatch(toggleBookingPageModal(false, booking.id))}
        }
    }

    return (
        <>
            <div className="CreateReviewModalContainer">
                <h2>Write a review for your stay at {booking.spotName}:</h2>
                <div className="thumbsContainer">
                    <input type="radio" id="radioThumbsUp" name={booking.id} className="thumbsUp" value="yes" checked={recommended==="yes"} onChange={handleChange}/>
                    <label htmlFor='radioThumbsUp' ><i className="fa-solid fa-thumbs-up"></i> Recommended</label>
                    <input type="radio" id="radioThumbsDown" name="recommended" className="thumbsDown" value="no" checked={recommended === "no"} onChange={(e) => setRecommended(e.target.value)} />
                    <label htmlFor="radioThumbsDown"><i className="fa-solid fa-thumbs-down"></i> Not Recommended</label>
                </div>
                <div className="ReviewBodyContainer">
                    <textarea onClick={removeDefault} onChange={handleTextChange} value={body}></textarea>
                </div>
                {booking.spotReview.length > 0 ? <button className='delete-review' onClick={handleDelete}>Delete Review</button> : null}
                {errors.length > 0 ? <ul className="errors">{errors.map(error => (<li key={Math.random()}>{error}</li>))}</ul> : null}
                <div className="submitButtons">
                    <div onClick={handleSubmit} >Submit</div>
                    <div onClick={handleCancel}>Cancel</div>
                </div>
            </div>
        </>
    )
}

export default CreateEditReviewModal;