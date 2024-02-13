import React from 'react';
import { useSelector } from 'react-redux';
import './SelectorPlataformas.css';

const SelectorPlataformas = ({ setPlataformas, Plats }) => {
  const Plataformas = useSelector(state => state.platforms);

  const handlePlatforms = (e) => {
    if (Plats.includes(e.target.value)) {
      return alert(`Plataforma ${e.target.value} ya agregada!`)
    } else {
      setPlataformas([...Plats, e.target.value])
    }

  }

  return (
    <select className="select" onChange={handlePlatforms}>
      <option value={'All'}>Platforms</option>
      {Plataformas.map((p, index) => {
        return (
          <option key={p.id} value={p.name}>{p.name}</option>
        )
      })}
    </select>
  )
}
export default SelectorPlataformas