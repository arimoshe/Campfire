import SpotReviewItem from "./SpotReviewItem"


function SpotReviews ({spot}) {
    return (
        <>
            <div className="SpotReviewsContainer">
                <ul className="SpotReviewHeader">
                    <li><h2><i className="fa-solid fa-thumbs-up"></i> {Math.floor(100 * (spot.recommendedReviews / spot.totalReviews))}%</h2></li>
                    <li><h2>{spot.totalReviews} reviews</h2></li>    
                </ul>
                <ul className="spotReviewItems">
                    {Object.values(spot.reviews).map((review, i)=>(i < 6 ? <li key={review.id}><SpotReviewItem review={review} /></li> : null))}
                </ul>
                {spot.totalReviews > 6 ? <button>Show all {spot.totalReviews} reviews </button> : null}
            </div>
        </>
    )
}

export default SpotReviews