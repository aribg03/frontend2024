import {useState} from "react"

function App() {
  const [contador, setContador] = useState(0)

  const handleBotonIncrementar = () => {
    setContador(contador + 1)
  }

  const handleBotonReset = () => {
    setContador(contador-contador)
  }

  const handleBotonDecrementar = () => {
    setContador(contador - 1)
  }
  return (
    <div>
      <h1>CONTADOR</h1>
      <hr />
      <h2>{contador}</h2>
      <button onClick = {handleBotonIncrementar}>Incrementar</button>
      <button onClick = {handleBotonReset}>Reset</button>
      <button onClick = {handleBotonDecrementar}>Decrementar</button>
    </div>
  )
}

export default App
