import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteVideogame, getVideogameDetail, resetVgDetail } from '../../redux/Actions'
import LoadingComponent from '../loading/LoadingComponent'
import './VideoGamesDetail.css'

const VideoGameDetail = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const Videogame = useSelector(state => state.videogameDetail)
  const [Cargando, setCargando] = useState(true);
  const idVideogame = props.match.params.id
  const irAtras = () => {
    dispatch(resetVgDetail())
    history.push('/videogames')
  }
  const Cargado = () => {
    setTimeout(() => {
      setCargando(false)
    }, 1000)
  }

  const eliminar = async (id) => {
    let eli = dispatch(deleteVideogame(id))
    if (eli) {
      irAtras()
    }

  }
  useEffect(() => {
    dispatch(getVideogameDetail(idVideogame))
    Cargado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {Cargando ?
        <div className='containerHome' style={{ height: "100vh", marginTop: 0, display: 'flex', justifyContent: "center", alignItems: "center" }}>
          <LoadingComponent />
        </div>
        :
        <div className='divGeneralDetail'>
          <div className='navDetail'>
            <button onClick={() => irAtras()}>Atras</button>
          </div>
          <div className='containerDetail'>
            <div className='title'>
              <h1><u>{Videogame.name}</u></h1>
              <h1>{Videogame.rating} ✭</h1>
            </div>
            <div className='details'>
              <img src={Videogame.background_image} alt="not found" className='fondo' />
              <div className='divDescripcionBtn'>
                <div className='description'>{Videogame.description}</div>
                {typeof (Videogame.id) !== 'number' ?
                  <div className='botonesDetails'>

                    <button onClick={() => eliminar(Videogame.id)} className="eliminar">Eliminar</button>
                  </div>
                  :
                  <></>}
              </div>
            </div>
            <div className='info'>
              <div>{Videogame.releaseDate}</div>
              <div>
                {
                  isNaN(idVideogame) ?
                    <>
                      <div> Generos: {Videogame.Generos?.map(g => g.name).join(" , ")}</div>
                      <div> Disponible para: {Videogame.Plataformas?.map(p => p.name).join(" , ")}</div>
                    </>
                    :
                    <>
                      <div> Generos: {Videogame.Generos?.join(" , ")}</div>
                      <div> Disponible para: {Videogame.Plataformas?.join(" , ")}</div>
                    </>
                }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default VideoGameDetail
