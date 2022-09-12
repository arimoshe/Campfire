
function SplashSearchBar () {


    return(
        <>
        <div className="SearchContainer">    
            <div className="SplashSearchBarContainer">
                <div className="splashSearchInputs">
                    <div className="SearchInputContainer splash">
                        WHERE TO?
                        <button id="SearchSelectorButton" ><i className="fa-solid fa-magnifying-glass"></i></button>
                        
                    </div>
                    <div className="DateSelectorContainer splash">
                        DATES
                        <button id="splashDatesSelectorButton" ><i className="fa-solid fa-calendar"></i></button>
                        
                    </div>
                    <div className="GuestsSelectorContainer splash">
                        GUESTS
                        <button id="splashGuestsSelectorButton" ><i className="fa-solid fa-user"></i></button>
                    </div>
                </div>
                <button className="searchPill"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div className="imageContainer">
            <img className="searchImage" src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1200,q_auto/homepage-us_ulfcxm.jpg" alt="Great Outdoors"/>
        </div>
        </>
    )

}

export default SplashSearchBar;