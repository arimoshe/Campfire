
function SplashDoubleItem ({h3, p, url}) {


    return(
        <>
            <div className="DoubleItemContainer">
                <div className="DoubleItemImage">
                    <img src={url} alt="nature" />
                </div>
                <div className="DoubleItemLabel">
                    <div className="DoubleItemLabelText">
                        <h3>{h3}</h3>
                        <p>{p}</p>
                    </div>
                    <button>Book Now</button>
                </div>
            </div>

        </>
    )
}

export default SplashDoubleItem;