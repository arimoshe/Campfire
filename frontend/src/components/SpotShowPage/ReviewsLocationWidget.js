


function ReviewsLocationWidget({spot}) {
    
    if (!spot) return null

    return (
        <>
            <div className="reviewsLocationContainer" >
                <span className="recommended"><i className="fa-solid fa-thumbs-up"></i> 97%</span> · 111 reviews · {spot.city}, {spot.state} 
            </div>
        </>
    )
}


export default ReviewsLocationWidget