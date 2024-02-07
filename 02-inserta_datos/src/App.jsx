const persona = {
  nombre : 'Arizbeth Becerra González',
  edad : 21,
  profesion: 'Alumno',
  pasatiempos: [
    'Hacer ejercicio',
    'Escuchar música',
    'Programar',
    'Comer',
    'Dormir',
    'Estudiar'
  ],
  fecha_nac: '03/11/2002',
  lugar_nac: 'Xalapa, Veracruz',
  signo_zod: 'Escorpio ♏︎'   
}


function App() {
  
  return (
    <div>
      <h1>Información personal</h1>
      <hr />
      <ul>
        <li>Nombre completo: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Profesión: {persona.profesion}</li>
        <li>Pasatiempos:
          <ul>
            {
              persona.pasatiempos.map((pasatiempo) => {
                return <li key= {pasatiempo} >
                      {pasatiempo}
                      </li>
              })
            }
          </ul>
        </li> 
        <li>Fecha de nacimiento: {persona.fecha_nac} </li>
        <li>Lugar de nacimiento: {persona.lugar_nac} </li>
        <li>Signo zodiacal: {persona.signo_zod} </li>
      </ul>
    </div>
  )
}

export default App
