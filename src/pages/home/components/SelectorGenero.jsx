import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtrar, getAllGenresApi, getAllVideogamesDb } from "../../../redux/Actions";
import './styles/SelectorGenero.css'



const SelectorGenero = ({setCargando}) => {
    const dispatch = useDispatch();
    const Generos = useSelector(state => state.genres)
    const Videogames = useSelector(state => state.videogames)


    
    const filtrarGenero = (e) => {
        if (e.target.value === "All") {
            dispatch(getAllVideogamesDb())
            setCargando(true)
        } else {
            dispatch(filtrar(Videogames.filter(game => game.Generos.includes(e.target.value)).map(g=>g)))
            setCargando(true)
        }
    }

    useEffect(() => {
        dispatch(getAllGenresApi())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

  return (
    <>
    <select className="select" onChange={filtrarGenero}>
                <option value={'All'}>Genre</option>
        {Generos.map((g)=> {
            return (
                <option key={g.id} value={g.name}>{g.name}</option>
            )
        })}
    </select>
    </>
  )
}
export default SelectorGenero