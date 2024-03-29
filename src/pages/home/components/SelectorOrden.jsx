import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtrar } from '../../../redux/Actions';
import './styles/SelectorOrden.css';

const SelectorOrden = ({ setCargando }) => {
    const dispatch = useDispatch();
    const Videogames = useSelector(state => state.videogames)
    const VideogamesAPI = useSelector(state => state.videogamesAPI)
    //---------------------------cREFACTORIZAR----------------------------------
    const CambiatFiltro = (e) => {
        if (e.target.value === "AZ") {
            let arr = Videogames.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
            return dispatch(filtrar(arr))
        } else if (e.target.value === "ZA") {
            let arr = Videogames.sort((a, b) => {
                if (a.name > b.name) { return -1; }
                if (a.name < b.name) { return 1; }
                return 0;
            })
            dispatch(filtrar(arr))
        } else if (e.target.value === "HR") {
            let arr = Videogames.sort((a, b) => {
                if (a.rating > b.rating) { return -1; }
                if (a.rating < b.rating) { return 1; }
                return 0;
            })
            dispatch(filtrar(arr))
        } else if (e.target.value === "LR") {
            let arr = Videogames.sort((a, b) => {
                if (a.rating < b.rating) { return -1; }
                if (a.rating > b.rating) { return 1; }
                return 0;
            })
            dispatch(filtrar(arr))
        } else if (e.target.value === "API") {
            dispatch(filtrar(Videogames.filter(game => typeof (game.id) === 'number').map(g => g)))
        } else if (e.target.value === "DB") {
            dispatch(filtrar(Videogames.filter(game => String(Number(game.id)) === 'NaN').map(g => g)))
        } else if (e.target.value === "EMPTY") {
            dispatch(filtrar(VideogamesAPI))
            setCargando(true)
        }
    }
    //---------------------------cREFACTORIZAR----------------------------------
    useEffect(() => {
    }, [])

    return (
            <select className="select" onChange={CambiatFiltro}>
                <option value={'EMPTY'} >All</option>
                <option value={'AZ'} >A-Z</option>
                <option value={'ZA'}>Z-A</option>
                <option value={'HR'}>Higher Rating</option>
                <option value={'LR'}>Lower Rating</option>
                <option value={'API'}>API</option>
                <option value={'DB'}>MyGames</option>
            </select>
    )
}

export default SelectorOrden