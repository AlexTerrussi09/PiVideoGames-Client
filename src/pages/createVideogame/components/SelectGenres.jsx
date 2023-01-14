import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenresApi } from '../../../redux/Actions';

const SelectGenres = ({Gens, setGeneros}) => {
    const dispatch = useDispatch();
    const Generos = useSelector(state => state.genres)

    const handleGenres = (e)=>{
        if (Gens.includes(e.target.value)) {
            return alert(`Genero ${e.target.value} ya agregado!`)
        } else {
            console.log(Gens)
            setGeneros([...Gens, e.target.value] )
        }
      }

    useEffect(() => {
        dispatch(getAllGenresApi())
    }, [])
    

  return (
    <>
    <select className="select" onChange={handleGenres}>
                <option value={'All'}>Genre</option>
        {Generos.map((g, index)=> {
            return (
                <option key={index} value={g.name}>{g.name}</option>
            )
        })}
    </select>
    </>
  )
}

export default SelectGenres