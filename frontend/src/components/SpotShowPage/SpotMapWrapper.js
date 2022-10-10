import { Wrapper } from "@googlemaps/react-wrapper";
import SpotMap from "./SpotMap";

function SpotMapWrapper({apiKey, spot}) {
    

    return (
        <>
            {/* <Wrapper apiKey={apiKey}> */}
                <SpotMap spot={spot}/>
            {/* </Wrapper> */}
        </>
    )
}

export default SpotMapWrapper