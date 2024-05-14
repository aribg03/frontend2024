const CityCardPlaceholder = () => {
    return(
        <>
            <div className="card-img-top" style={({height: '200px'})}></div>
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                </p>
            </div>
        </>
    )
}
export default CityCardPlaceholder