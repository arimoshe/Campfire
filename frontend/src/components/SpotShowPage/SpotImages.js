

function SpotImages({spot}) {


    return (
        <>
            

            <div className="spotImagesContainer">
                <div className="spotImagesLeft">
                    <img id="spotImagesLeft" src={`https://via.placeholder.com/640x800`} alt="campsite" />
                </div>                
                <div className="spotImagesRightContainer">   
                    <div id="spotImagesRightLeftTop"><img  src={`https://via.placeholder.com/640x320`} alt="campsite" /></div>
                    <div id="spotImagesRightRightTop"><img src={`https://via.placeholder.com/640x800`} alt="campsite" /></div>
                    <div id="spotImagesRightLeftBottom"><img src={`https://via.placeholder.com/640x480`} alt="campsite" /></div>
                    <div id="spotImagesRightRightBottom" ><img src={`https://via.placeholder.com/640x480`} alt="campsite" /></div>
                </div>
            </div>
        </>
    )

}

export default SpotImages