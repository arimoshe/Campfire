import { GiPaddles, GiSurfBoard, GiRiver } from 'react-icons/gi'

function SpotActivities({ spot }) {

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
            default:
                return (<i className="fa-solid fa-atom"></i>)
        }
    }

    return (
        <>
            <ul className="SpotTagContainer" >
                <li>Activities</li>
                {spot.activities.length > 0 ? spot.activities.slice(0, 4).map((activity) => <li key={Math.random()}>{getIcon(activity.name)}  {activity.name}</li>) : null}
                
            </ul>
        </>
    )
}


export default SpotActivities