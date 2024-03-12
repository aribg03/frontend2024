import { useState } from "react"
import "./App.css"
import { buttons } from './assets/button'
import { ButtonRow } from './components/ButtonRow'

function App() {

  const [display, setDisplay] = useState({
    value: '0',
    hasPoint: false,
    previousValue:'0',
    operatorHasBeenPressed: false,
    operator:''
  })

  const updateDisplay = (value) => {
    if(value === '.'){
      if(display.hasPoint){
        return
      }
      setDisplay({
        ...display,
        value: limit(display.value + value),
        hasPoint: true
      })
      return
    }
    if(display.value === '0'){
      setDisplay({
        ...display,
        value: limit(value)
      })
    } else {
      setDisplay({
        ...display,
        value: limit(display.value + value)
      })
    }
  }

  const clearDisplay = (value) => {
    setDisplay({
      ...display,
      value: '0',
      hasPoint: false
    })
  }

  const deletelastCharacter = () => {
    setDisplay({
      ...display,
      value: display.value.slice(0, -1),
      hasPoint: (display.value.slice(-1)==='.') ? false : display.hasPoint
    })
    if(display.value.length === 1){
      setDisplay({
        ...display,
        value:'0'
      })
    }
  }

  const setOperator = (operator) => {
    setDisplay({
      ...display,
      previousValue: display.value,
      operatorHasBeenPressed: true,
      hasPoint: false,
      value: '0',
      operator
    })
  }

  const calculate = () => {
    if(!display.operatorHasBeenPressed){
      return
    }

    //let result = 0

    //if(display.operator === '%'){
    //  result = eval(`${display.previousValue} / 100 * ${display.value}`)
    //} else{
    //  result = eval(`${display.previousValue} ${display.operator} ${display.value}`)
    //}

    let result = (display.operator ==='%') ?
      eval(`${display.previousValue} / 100 * ${display.value}`) :
      eval(`${display.previousValue} ${display.operator} ${display.value}`)

    result = result + ""

    setDisplay({
      ...display,
      value: limit(result),
      operatorHasBeenPressed: false,
      hasPoint:result.includes("."),
      previousValue: '0'
    })
  }

  const limit = (string = '', length = 7) => {
    return string.slice(0, length)
  }

  const buttonsFunctions = {
    updateDisplay,
    clearDisplay,
    deletelastCharacter,
    setOperator,
    calculate
  }
  
  return (
    <div>
      <h1>Calculator</h1>
      <hr />
      <table className ="center">
        <tbody>
          <tr>
            <td className = 'text-end' colSpan = {4} >
              <h1>{display.value}</h1>
            </td>
          </tr>
          {
            buttons.map((row,index) => {
              return (
                <ButtonRow key ={index} 
                row = {row} 
                buttonsFunctions = {buttonsFunctions} />
              )
            })
          }          
        </tbody>
      </table>
    </div>
  )
}

export default App
