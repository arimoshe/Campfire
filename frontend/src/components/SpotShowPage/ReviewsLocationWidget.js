


function ReviewsLocationWidget({spot}) {
    
    if (!spot) return null

    return (
        <>
            <div className="reviewsLocationContainer" >
                {spot.totalReviews > 0 ? <><span className="recommended"><i className="fa-solid fa-thumbs-up"></i>{Math.floor(100 * (spot.recommendedReviews / spot.totalReviews))}%</span> · {spot.totalReviews} reviews · </> : null}{spot.city}, {spot.state} 
            </div>
        </>
    )
}


export default ReviewsLocationWidget