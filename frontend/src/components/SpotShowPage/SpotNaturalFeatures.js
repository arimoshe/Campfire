function SpotNaturalFeatures({ spot }) {

    if (!spot && spot.activities) return null

    return (
        <>
            <ul className="SpotTagContainer" >
                <li>Natural Features</li>
                {spot.naturalFeatures.length > 0 ? spot.naturalFeatures.slice(0, 4).map((feature) => <li key={Math.random()}><i className="fa-solid fa-atom"></i> {feature.name}</li>) : null}
                {spot.naturalFeatures.length > 4 ? <><button>Show more</button></> : null}
            </ul>
        </>
    )
}


export default SpotNaturalFeatures