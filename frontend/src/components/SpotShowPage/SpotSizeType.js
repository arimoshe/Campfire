


function SpotSizeType({ spot }) {

    if (!spot) return null

    return (
        <>
            <div className="spotSizeTypeContainer" >
                <div className="acres" >{spot.acres} acres</div>
                {spot.lodgings > 0 ? <div className="type" ><i className="fa-solid fa-bed"></i><br />{spot.lodgings} Lodging</div> : null}
                {spot.rvs > 0 ? <div className="type" ><i className="fa-solid fa-bed"></i><br />{spot.rvs} RVs</div> : null}
                {spot.tents > 0 ? <div className="type" ><i className="fa-solid fa-tent"></i><br />{spot.tents} Tents</div> : null}
            </div>
        </>
    )
}


export default SpotSizeType