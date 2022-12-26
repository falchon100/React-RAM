import React from 'react'

const Character = ({character}) => {
  return (
<div>
   <div className='text-center' >
    <h1  className='text-center '  >{character.name} </h1> 
    <p>{character.species} </p>
    <img className='pb-3 img-fluid rounded-pill' src={character.image} alt={character.name} />
    <p className= {character.status== 'Alive'? 'btn btn-success': 'btn btn-danger'}>{character.status == 'Alive'?'Vivo' : 'Muerto'} </p>
</div>
</div>
  )
}

export default Character