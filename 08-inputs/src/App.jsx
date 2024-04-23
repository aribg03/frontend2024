import { useForm } from './Hooks/useForm'


function App() {
  const [inputsForm, handleInputChange, FormReset] = useForm({
    username: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Hola, mi nombre de usuario es: ",inputsForm.username)
    console.log("y mi contraseña es: ",inputsForm.password)
    FormReset()
  }

  return (
    <div>
      <h1>Input</h1>
      <hr />
      <form onSubmit = {(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
          id="username"
          name="username"
          type="text" 
          value={inputsForm.username}
          onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          id="password"
          name="password"
          type="password" 
          value={inputsForm.password}
          onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
