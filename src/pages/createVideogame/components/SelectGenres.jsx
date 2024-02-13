import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenresApi } from '../../../redux/Actions';

const SelectGenres = ({ Gens, setGeneros }) => {
    const dispatch = useDispatch();
    const Generos = useSelector(state => state.genres)

    const handleGenres = (e) => {
        if (Gens.includes(e.target.value)) {
            return alert(`Genero ${e.target.value} ya agregado!`)
        } else {
            setGeneros([...Gens, e.target.value])
        }
    }

    useEffect(() => {
        dispatch(getAllGenresApi())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <select className="select" onChange={handleGenres}>
            <option value={'All'}>Genre</option>
            {Generos.map((g) => {
                return (
                    <option key={g.id} value={g.name}>{g.name}</option>
                )
            })}
        </select>
    )
}

export default SelectGenres