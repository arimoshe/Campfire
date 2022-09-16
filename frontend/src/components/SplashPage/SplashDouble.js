import SplashDoubleItem from "./SplashDoubleItem";

import campsite from '../../tegan-mierle-fDostElVhN8-unsplash.jpg' 
import camper from '../../blake-wisz-TcgASSD5G04-unsplash.jpg'

function SplashDouble() {


    return (
        <>
            <div className="SplashDoubleContainer" >
                <SplashDoubleItem h3="COZY FALL STAYS" p="Explore the great outdoors at cozy Campfire this fall." url={campsite} />
                <SplashDoubleItem h3="TAKE A TRIP THIS WEEKEND" p="Be spontaneous and book your camping trip today!" url={camper} />
            </div>
        </>
    )
}

export default SplashDouble;