import React from 'react'
import App from '../App'

const person={
    name:'chandra sekhar',
    age:19,
    location:'vzm'
}

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt='search'/>
            <input type="text" placeholder='search thousands if movies' value={searchTerm}
             onChange={(event)=>setSearchTerm(event.target.value)}/>
        </div>
    </div>
  )
}

export default Search