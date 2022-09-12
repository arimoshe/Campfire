import SplashDouble from './SplashDouble';
import './SplashPage.css'
import SplashSearchBar from './SplashSearchBar';

function SplashPage () {

    return(
        <>
        <div className="pageContainer">
            <div className="SplashContainer">
                <div className="SplashTextContainer">
                    <h1>Explore the great outdoors.</h1>
                    <h2>Browse and book tent spots, RV spaces, cabins, treehouses, glamping and more.</h2>
                </div>
                <SplashSearchBar />
                <SplashDouble />
                <h2>Where to go now</h2>

            </div>
        </div>
        </>
    )
}

export default SplashPage;