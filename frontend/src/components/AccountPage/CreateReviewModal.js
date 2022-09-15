import { useState } from "react";


function CreateReviewModal ({booking}) {

    const [recommended, setRecommended] = useState('yes')

    const handleChange = (e) => {
        console.log(e.target.value)
        setRecommended(e.target.value)
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
                    <textarea defaultValue={'Write Your Review Here...'}></textarea>
                </div>
                <div className="submitButtons">
                    <div >Submit</div>
                    <div >Cancel</div>
                </div>
            </div>
        </>
    )
}

export default CreateReviewModal;