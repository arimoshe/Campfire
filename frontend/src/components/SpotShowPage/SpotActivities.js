function SpotActivities({ spot }) {

    if (!spot && spot.activities) return null

    return (
        <>
            <ul className="SpotTagContainer" >
                <li>Activities</li>
                {spot.activities.length > 0 ? spot.activities.slice(0, 4).map((activity) => <li key={Math.random()}><i className="fa-solid fa-atom"></i> {activity.name}</li>) : null}
                {spot.activities.length > 4 ? <><button>Show more</button></> : null}
            </ul>
        </>
    )
}


export default SpotActivities