import { useEffect, useState } from "react"
import { getWeather } from "../../api/WeatherApi"
import CityCardContent from "./CityCardContent"
import CityCardPlaceholder from "./CityCardPlaceholder"

const CityCard = ({city}) => {
    const [weather, setWeather] = useState(null)

    useEffect(()=>{
    const getCityWeather = async()=>{
      setWeather(await getWeather(city))
    }

    getCityWeather() 
    },[city])
    
    return(
        <div className="col-1 card m-2" style={{width:'18rem'}}>
            {weather ?
            <CityCardContent weather = {weather} /> :
            <CityCardPlaceholder />}
        </div>
    )
    }
    export default CityCard





















































        