import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postVideogameDb } from '../../redux/Actions';
import SelectGenres from './components/SelectGenres';
import SelectorPlataformas from './components/SelectorPlataformas';
import './CreateVideogame.css'

const CreateVideogame = props => {
  const history = useHistory();
  const [Error, setError] = useState("")
  const dispatch = useDispatch();
  const [Plataformas, setPlataformas] = useState([])
  const [Generos, setGeneros] = useState([])

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const [Form, setForm] = useState({
    name : "",
    description : "",
    platforms: [], 
    background_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
    rating: 1.0,
    genres : [],
    releaseDate : hoy.toLocaleDateString()
  })
  ;


const handleName = (e) => {
    setForm({ ...Form, name: e.target.value })
};
const handleDescription = (e) => {
  setForm({ ...Form, description: e.target.value })
};
const handleDate = (e) => {
let date = new Date(e.target.value)
setForm({ ...Form, releaseDate: date.toLocaleDateString() })
};
const handleImg = (e) => {
  setForm({ ...Form, background_image: e.target.value })
};
const handleRating = (e) => {
  e.preventDefault()
  let puntuacion  = e.target.value
  if ( (puntuacion && puntuacion > 5) ||( puntuacion && puntuacion < 1)) {
    setError("El Rating tiene que ser un valor entre 1 y 5")
  } else {
    setForm({ ...Form, rating: e.target.value })
    setError("")
  }
};
const crearVideojuego = async(e) => {
  e.preventDefault();
  let juego = await dispatch(postVideogameDb({...Form, genres : Generos, platforms : Plataformas}))
  if (juego) {
    reset()
    setTimeout(()=>{
      window.location.reload()
    },500)
  }
  }
  const irAtras = () => {
    history.replace('/videogames')
  }
  const reset = () => {
    setForm({
      name : "",
    description : "",
    platforms: [], 
    releaseDate : hoy.toLocaleDateString(),
    background_image : "https://www.publicdomainpictures.net/es/view-image.php?image=270609&picture=imagen-no-encontrada",
    rating: 1.0,
    genres : ["Action"]
    })
  }
  const eliminarPlataforma = (p) => {
    setPlataformas(Plataformas.filter(pl => pl !== p))
  }
  const eliminarGenero = (g) => {
    setGeneros(Generos.filter(gn => gn !== g))
  }

  return (
    <>
    <div className='divGeneral'>
      <div className='divG1'>
        <nav className='navCreate'>
          <button onClick={()=>irAtras()}>Atras</button>
        </nav>
      </div>
      <div className='divG2'>
      <div className='createDiv'>
        <h3>Crea tu propia carta de Videojuego!</h3>
        <form onSubmit={crearVideojuego}>
          <div className='div1'>
            <div className='div2'>
              <label className='primerLabel'><span>*</span>Nombre:</label>
              <input type="text" onChange={handleName} />
            </div>
            <div className='div2'>
              <label><span>*</span>Descripcion:</label>
              <textarea onChange={handleDescription}/>
            </div>
            <div className='div2'>
              <label>Rating:</label>
              <input type="number" step="0.001" onChange={handleRating} />
              {Error?
            <span className='span'>{Error}</span>
            :
            <></>
            }
            </div>
          </div>
          <div className='div1'>
            <div className='div2'>
              <label>*Plataformas:</label>
              <SelectorPlataformas Plats={Plataformas} setPlataformas={setPlataformas}/>
              <div className='box'>
              {Plataformas?
              Plataformas.map((p, index)=>{
                return(
                  <span className='span' key={index}>{p}<i onClick={()=>{eliminarPlataforma(p)}}>  —</i></span>
                )
              })
              :
            <></>}
              </div>
            </div>
            <div className='div2'>
              <label>*Generos:</label>
              <SelectGenres Gens={Generos} setGeneros={setGeneros}/>
              <div className='box'>
              {Generos?
              Generos.map((g, index)=>{
                return(
                  <>
                  <span key={index} className='span'>{g}<i onClick={()=>{eliminarGenero(g)}} className="elim">  —</i></span>
                  </>
                )
              })
              :
              <></>
              }
              </div>
            </div>
          </div>
          <div className='div1'>
          <div className='div2'>
            <label>Imagen URL:</label>
            <input type="text" onChange={handleImg}/>
          </div>
          <div className='div2'>
              <label>Fecha De Lanzamiento:</label>
              <input type="date" onChange={handleDate}/>
            </div>
          </div>
          <div>
            <button type='submit' disabled={!Form.name || !Form.description || !Form.platforms || Error}>Crear</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    </>
  )
}
export default CreateVideogame