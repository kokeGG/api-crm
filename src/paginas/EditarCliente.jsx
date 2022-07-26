import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react' //useEffect paraa consultar la API, useState para colocarlo en el state de resultado
import { useParams } from 'react-router-dom' //useParams para leer el id que tenemos en la url

const EditarCliente = () => {
  const [cliente, setCliente]  = useState({})
  const [cargando, setCargando] = useState(true)
  const {id} = useParams()
  useEffect(() => {
      const obtenerClienteAPI = async () => {
          try {
              const url = `http://localhost:4000/clientes/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado)
          } catch (error) {
              console.log(error)
          }
          setCargando(!cargando)
      }
      obtenerClienteAPI()
  }, [])
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Utiliza este formulario para editar datos de un cliente</p>
      {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ): <p>Cliente ID no válido</p>}
    </>
  )
}

export default EditarCliente