import { GiPaddles, GiSurfBoard, GiRiver, GiCircleForest, GiGrass, GiReed, GiFarmTractor } from 'react-icons/gi'
import { FaMountain } from 'react-icons/fa/'

function SpotNaturalFeatures({ spot }) {

    if (!spot && spot.activities) return null

    const getIcon = (name) => {
        switch (name) {
            case "Biking":
                return (<i className="fa-solid fa-bicycle"></i>)
            case "Boating":
                return (<i className="fa-solid fa-ship"></i>)
            case "Fishing":
                return (<i className="fa-solid fa-fish"></i>)
            case "Hiking":
                return (<i className="fa-solid fa-person-hiking"></i>)
            case "Biking":
                return (<i className="fa-solid fa-bicycle"></i>)
            case "Paddling":
                return (<GiPaddles />)
            case "Surfing":
                return (<GiSurfBoard />)
            case "Swimming":
                return (<i className="fa-solid fa-person-swimming"></i>)
            case "Wildlife watching":
                return (<i className="fa-solid fa-kiwi-bird"></i>)
            case "Redwoods":
                return (<i className="fa-solid fa-tree"></i>)
            case "River, stream, or creek":
                return (<GiRiver />)
            case "Forest":
                return (<GiCircleForest />)
            case "Mountainous":
                return (<FaMountain />)
            case "Field":
                return (<GiGrass />)
            case "Wetlands":
                return (<GiReed />)
            case "Farm":
                return (<GiFarmTractor />)
            default:
                return (<i className="fa-solid fa-tree"></i>)
        }
    }

    return (
        <>
            <ul className="SpotTagContainer" >
                <li>Natural Features</li>
                {spot.naturalFeatures.length > 0 ? spot.naturalFeatures.slice(0, 4).map((feature) => <li key={Math.random()}>{getIcon(feature.name)} {feature.name}</li>) : null}
                
            </ul>
        </>
    )
}


export default SpotNaturalFeatures