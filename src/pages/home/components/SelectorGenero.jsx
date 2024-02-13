import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtrar } from "../../../redux/Actions";
import './styles/SelectorGenero.css';



const SelectorGenero = ({ setCargando }) => {
    const dispatch = useDispatch();
    const Generos = useSelector(state => state.genres)
    const Videogames = useSelector(state => state.videogames)
    const VideogamesAPI = useSelector(state => state.videogamesAPI)




    const filtrarGenero = (e) => {
        if (e.target.value === "All") {
            dispatch(filtrar(VideogamesAPI))
            setCargando(true)
        } else {
            setCargando(true)
            dispatch(filtrar(Videogames.filter(game => game.Generos.includes(e.target.value)).map(g => g)))
            setCargando(false)
        }
    }

    return (
            <select className="select" onChange={filtrarGenero}>
                <option value={"All"}>All</option>
                {Generos.map((g) => {
                    return (
                        <option key={g.id} value={g.name}>{g.name}</option>
                    )
                })}
            </select>
    )
}
export default SelectorGenero