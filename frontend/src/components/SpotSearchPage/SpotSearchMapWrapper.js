import { Wrapper } from "@googlemaps/react-wrapper";
import SpotSearchMap from "./SpotSearchMap";

function SpotSearchMapWrapper({ apiKey, spots }) {


    return (
        <>
            {/* <Wrapper apiKey={apiKey}> */}
                <SpotSearchMap spots={spots} />
            {/* </Wrapper> */}
        </>
    )
}

export default SpotSearchMapWrapper