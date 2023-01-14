import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlatformsApi } from '../../../redux/Actions';
import './SelectorPlataformas.css'

const SelectorPlataformas = ({setPlataformas, Plats}) => {
    const Plataformas = useSelector(state=> state.platforms);
    const dispatch = useDispatch()
    
    const handlePlatforms = (e)=>{
      if (Plats.includes(e.target.value)) {
        return alert(`Plataforma ${e.target.value} ya agregada!`)
      } else {
        console.log(Plats)
      setPlataformas([...Plats, e.target.value] )
      }
      
    }
    useEffect(() => {
        dispatch(getAllPlatformsApi())
    }, [])
    
  return (
    <>
    <select className="select" onChange={handlePlatforms}>
                <option value={'All'}>Platforms</option>
        {Plataformas.map((p, index)=> {
            return (
                <option key={index} value={p.name}>{p.name}</option>
            )
        })}
    </select></>
  )
}
export default SelectorPlataformas