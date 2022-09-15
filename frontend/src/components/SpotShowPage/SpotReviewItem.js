import logoIcon from './../../CampfireIcon.svg'

function SpotReviewItem({review}) {

    const dateOptions = {  month: 'long', day: 'numeric', year: 'numeric' };

    return (
        <>
            <div className="SpotReviewItemContainer">
                <div className='SpotReviewItemCustomerHeader'>
                    <div className="avatarContainer">
                        <img src={logoIcon} alt="default avatar"/>
                        {review.recommended ? <i className="fa-solid fa-thumbs-up"></i> : null}
                    </div>
                    <ul>
                        <li>{`${review.authorFirstName} ${review.authorLastName.slice(0,1).toUpperCase()}.`}</li>
                        <li>{new Date(review.createdAt).toLocaleDateString("en-us", dateOptions)}</li>
                    </ul>
                </div>
                <p>{review.body}</p>
            </div>
        </>
    )
}

export default SpotReviewItem