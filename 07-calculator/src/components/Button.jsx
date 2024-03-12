import {buttonsClasses} from "../assets/buttonsClasses"
export const Button = ({
    class: buttonClass, 
    label, 
    function: buttonFunction, 
    columns,
    buttonsFunctions
}) => {
    return (
        <td colSpan={columns}>
        <button
        type = 'button'
        className = {buttonsClasses[buttonClass]}
            onClick = {() => buttonsFunctions[buttonFunction](label)}
        >
            {label}
        </button>
        </td>
    )
}