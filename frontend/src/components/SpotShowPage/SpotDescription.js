


function SpotDescription({ spot }) {

    if (!spot) return null

    return (
        <>
            <p className="SpotDescriptionContainer" >
                {spot.about}
            </p>
        </>
    )
}


export default SpotDescription