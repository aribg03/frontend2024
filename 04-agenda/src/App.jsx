import ListItem from './Listitem.jsx'
const datos = [
  {
    nombre: 'Arizbeth BG',
    telefono: '2871531281',
    email: 'isc20350254@gmail.com'
  },
  {
    nombre: 'María Fernanda PJ',
    telefono: '2871531282',
    email: 'isc20350306@gmail.com'
  },
  {
    nombre: 'Luis Ernesto SM',
    telefono: '2871531281',
    email: 'isc20350254@gmail.com'
  },
]

function App() {
  
  return (
    <div>
      <h1>AGENDA</h1>
      <hr />
      <ul>
        {
          datos.map((dato) => (
            <ListItem
              key={dato.nombre}
              nombre={dato.nombre}
              telefono={dato.telefono}
              email={dato.email}/>
          ))
        }
      </ul>
    </div>
  )
}

export default App
