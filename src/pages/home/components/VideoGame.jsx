import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles/VideoGame.css'

const VideoGame = ({ VideoGame }) => {
  const generos = VideoGame.Generos;
  const RenderGenres = generos.map(g => g).join('-')
  const render = generos.map(g => g.name).join('-')
  const history = useHistory();

  const irVideoGame = (id) => {
    history.replace(`/videogames/${id}`)
  }
  return (
      <div className='cardVideoGame' onClick={() => irVideoGame(VideoGame.id)}>
        <h3>{VideoGame.name}</h3>
        <img src={VideoGame.background_image} alt=" not found" />
        <h4>{typeof VideoGame.id === 'number' ? RenderGenres : render}  ({VideoGame.rating} ✭) </h4>
      </div>
  )
}

export default VideoGame