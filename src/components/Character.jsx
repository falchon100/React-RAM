import React from 'react'

const Character = ({character}) => {
  return (
<div>
   <div className='text-center' >
    <h1  className='text-center p-5'  >{character.name} </h1> 
    <p>{character.status == 'Alive'?'Estado : vivo' : 'Estado : muerto'} </p>
    <p>{character.species} </p>
    <img className='img-fluid rounded-pill' src={character.image} alt={character.name} />
</div>
</div>
  )
}

export default Character