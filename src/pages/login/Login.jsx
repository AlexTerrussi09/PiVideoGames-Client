import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css"

const Login = props => {
  const history = useHistory();
  const irHome = () => {
    history.replace('/videogames')
  }
  return (
    <div className='container'>
      <div className='login'>
        <h1>Bienvenidos!</h1>
        <p>
          Esta aplicacion web te permite ver el catalogo completo de los videojuegos existentes, podras filtrar y buscar tus videojuegos favoritos!
        </p>
        <button className='btn' onClick={() => irHome()}>Entrar!</button>
      </div>
    </div>
  )
}

export default Login