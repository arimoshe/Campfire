import { useHistory } from "react-router-dom";

function SplashDoubleItem ({h3, p, url}) {
    const history = useHistory();
    const handleClick = () => {
        history.push('/search')
    }

    return(
        <>
            <div onClick={handleClick} className="DoubleItemContainer">
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