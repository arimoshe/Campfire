


function SpotImages({spot}) {
    if (!spot) {return null}

    return (
        <>
            

            <div className="spotImagesContainer">
                <div className="spotImagesLeft">
                    <img id="spotImagesLeft" src={spot.photoUrls[0]} alt="campsite" />
                </div>                
                <div className="spotImagesRightContainer">   
                    <div id="spotImagesRightLeftTop"><img src={spot.photoUrls[1]} alt="campsite" /></div>
                    <div id="spotImagesRightRightTop"><img src={spot.photoUrls[2]} alt="campsite" /></div>
                    <div id="spotImagesRightLeftBottom"><img src={spot.photoUrls[3]} alt="campsite" /></div>
                    <div id="spotImagesRightRightBottom" ><img src={spot.photoUrls[4]} alt="campsite" /></div>
                </div>
            </div>
        </>
    )

}

export default SpotImages