

function SpotDescription({ spot }) {

    if (!spot) return null

    return (
        <>
            <div className="SpotDescriptionContainer" >
                <p>{spot.about}</p>
            </div>
            
        </>
    )
}


export default SpotDescription