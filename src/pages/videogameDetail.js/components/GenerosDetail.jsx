import React from 'react'

export const GenerosDetail = ({Juego}) => {
    console.log(Juego)
    const generos = Juego.genres
    const renderJuego = generos.map(g => g.name)
  return (
    <>
     <div>
        {renderJuego}
     </div>
    </>
  )
}
