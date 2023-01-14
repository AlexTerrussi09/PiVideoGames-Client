import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actualizarVideogame, deleteVideogame, getVideogameDetail, resetVgDetail } from '../../redux/Actions'
import LoadingComponent from '../loading/LoadingComponent'
import './VideoGamesDetail.css'
import SelectorPlataformas from '../createVideogame/components/SelectorPlataformas'
import SelectGenres from '../createVideogame/components/SelectGenres'

 const VideoGameDetail = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const Videogame = useSelector(state => state.videogameDetail)
  const [Cargando, setCargando] = useState(true);
  const [Plataformas, setPlataformas] = useState([]);
  const [Genres, setGeneros] = useState([])
  const [Error, setError] = useState("")
  const [Form, setForm] = useState({})
  ;
  const idVideogame = props.match.params.id
  const irAtras = () =>{
    dispatch(resetVgDetail())
    history.push('/videogames')
  }
  const Cargado = () => {
    console.log(Videogame)
    setTimeout(()=>{
      setCargando(false)
      setForm({
        name : Videogame.name,
        description : Videogame.description,
        Plataformas: Videogame.Plataformas, 
        background_image : Videogame.background_image,
        rating: Videogame.rating,
        Generos : Videogame.Generos,
        releaseDate : Videogame.releaseDate
      })
    },1000)
  }
  
  const eliminar = async(id) => {
   let eli =  dispatch(deleteVideogame(id))
   if (eli) {
    irAtras()
   }
   
  }
  const eliminarPlataforma = (p) => {
    setPlataformas(Plataformas.filter(pl => pl !== p))
  }
  const eliminarGenero = (g) => {
    setGeneros(Genres.filter(gn => gn !== g))
  }
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
    let puntuacion  = e.target.value
    if ( (puntuacion && puntuacion > 5) ||( puntuacion && puntuacion < 1)) {
      setError("El Rating tiene que ser un valor entre 1 y 5")
    } else {
      setForm({ ...Form, rating: e.target.value })
      setError("")
    }
  };
  const editarVideogame = (e) => {
    console.log(Form)
    e.preventDefault();
  let gens = Genres? setForm({ ...Form, Generos: Genres }) : setForm({ ...Form, Generos: Videogame.Generos }) 
  let pla = Plataformas? setForm({ ...Form, Plataformas: Plataformas }) : setForm({ ...Form, Plataformas: Videogame.Plataformas }) 
  let juego = dispatch(actualizarVideogame({...Form, Generos : gens, Plataformas : pla}))
  if (juego) {
    alert("Videojuego Actualizado correctamente")
  } else {
    alert("Error al actualizar el videojuego")
  }
  }
  useEffect(() => {
  dispatch(getVideogameDetail(idVideogame))
  Cargado()
  
  }, [])
  
  return (
    <>
    {Cargando?
    <LoadingComponent/>
  :
    <div className='divGeneralDetail'>
      <div className='navDetail'>
          <button onClick={()=>irAtras()}>Atras</button>
      </div>
      <div className='containerDetail'>
          <div className='title'>
                <h1><u>{Videogame.name}</u></h1>
                <h1>{Videogame.rating} ✭</h1>
          </div>
          <div className='details'>
                <img src={Videogame.background_image} alt="not found" className='fondo'/>
                <div className='divDescripcionBtn'>
                  <div className='description'>{Videogame.description}</div>
                  {typeof (Videogame.id) !== 'number'? 
                  <div className='botonesDetails'> 

                    <button onClick={()=>eliminar(Videogame.id)} className="eliminar">Eliminar</button>
                  </div>
                  :
                  <></>}
                </div>
          </div>
          <div className='info'>
                <div>{Videogame.releaseDate}</div>
                <div>
                {String(Number(Videogame.id)) !== 'NaN'? <div> Generos: {Videogame.Generos?.join(" , ")}</div>:<div> Generos: {Videogame.Generos.map(p => p.name).join(" , ")}</div>}
                {String(Number(Videogame.id)) !== 'NaN'? <div> Disponible para: {Videogame.Plataformas?.join(" , ")}</div>:<div> Disponible para: {Videogame.Plataformas.map(p => p.name).join(" , ")}</div>}
                </div>
          </div>
      </div>
    </div>
  }
    </>
  )
}
export default VideoGameDetail
