export const getWeather = async () => {
    const key = "2f863af99294401487c144315240905"
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Tuxtepec&aqi=no&lang=es`
    const response = await fetch(url)
    const weather = await response.json()

return weather

}