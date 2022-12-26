import React from 'react'
import "./Search.css"

const Search = ({setSearch}) => {
  return (
    <form className=' d-flex container mb-3 justify-content-center gap-4 mb-5' action="">
        <input className='form-control barra border border-primary 'onChange={e=>{
          setSearch(e.target.value)
        }} type={'search'} placeholder='Search for Character'/>
        <button className='btn btn-primary'>Buscar</button>
    </form>
  )
}

export default Search