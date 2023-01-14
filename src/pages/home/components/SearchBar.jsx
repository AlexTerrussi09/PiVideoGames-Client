import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buscarJuegos, getAllVideogamesDb } from '../../../redux/Actions';
import './styles/SearchBar.css'
import SelectorGenero from './SelectorGenero';
import SelectorOrden from './SelectorOrden';

const SearchBar = ({setCargando}) => {
  const history = useHistory();
  const [Busqueda, setBusqueda] = useState('')
  const dispatch = useDispatch();

  const irCreate = () => {
    history.replace('/videogames/create')
  }
  const irLogin = () => {
    history.replace('/')
  }

  const cambiarInput = (e) => {
    setBusqueda(e.target.value)
  }
  const Buscar =  (e) => {
    e.preventDefault()
    setCargando(true)
    console.log(Busqueda)
    let buscar = dispatch(buscarJuegos(Busqueda))
    if (!buscar) {
      setCargando(false)
     return alert("no se encontro ningun juego con ese nombre")
    } 
    setCargando(false)
    return buscar
  }
  return (
    <>
        <div className='div'>
          <div className='divSelector'>
          <img onClick={()=>irLogin()} className='icono' src='https://http2.mlstatic.com/storage/mshops-appearance-api/images/15/254304515/logo-2020060212005277900.png' width={"40rem"} height={"40rem"}/>
            <SelectorGenero setCargando={setCargando}/>
            <SelectorOrden setCargando={setCargando}/>
          </div>
            <form className='divSearch' onSubmit={Buscar}>
                <input placeholder='Search' onChange={cambiarInput}/>
                <button type='submit' className='btnSearch'>Search</button>
            </form>
            <div className='divCreate'>
                <button onClick={()=>irCreate()}>Create</button>
            </div>
        </div>
    </>
  )
}
export default SearchBar