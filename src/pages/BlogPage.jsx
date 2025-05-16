import HeaderComponent from "../components/HeaderComponent"
import "./BlogPage.css"
import "../components/HeaderComponent.css"
import { useState } from 'react'

function BlogPage() {
  const [formData, setFormData] = useState({
    username: '',
    comentario: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("El formulario se ha enviado correctamente")
    console.log("Datos:", formData)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>
        <h1>Formulario - Tu opinión</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="username">Nombre:</label>
            <input 
              type="text" 
              id="username" 
              value={formData.username}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="comentario">Comentario:</label>
            <input 
              type="text" 
              id="comentario" 
              value={formData.comentario}
              onChange={handleChange}
            />
          </fieldset>
          <button>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default BlogPage