import { useForm } from "../../Hooks/useForm.js"

const SearchCity = ({cities, setCities}) => {
    const [values, handleInputChange, reset] = useForm ({
        city: ''
    })

    const handleSearchCity = () => {
        const newCities = [...cities, values.city]
        setCities(newCities)

        reset()
    }
    
    return (
        <div className = "input-group">
            <span className="input-group-text">City</span>
            <input 
                class= "form-control"
                id="city"
                name="city"
                onChange={handleInputChange}
                type="text"
                value={values.city}
                />
            <button 
                className = "btn btn-primary" 
                type = "button"
                onClick={handleSearchCity}
                >Search</button>
         </div>
    )
}
export default SearchCity