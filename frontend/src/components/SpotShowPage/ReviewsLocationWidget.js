


function ReviewsLocationWidget({spot}) {
    
    if (!spot) return null

    return (
        <>
            <div className="reviewsLocationContainer" >
                <span className="recommended"><i className="fa-solid fa-thumbs-up"></i>{Math.floor(100 * (spot.recommendedReviews.count / spot.reviews.count))}%</span> · {spot.reviews.count} reviews · {spot.city}, {spot.state} 
            </div>
        </>
    )
}


export default ReviewsLocationWidget