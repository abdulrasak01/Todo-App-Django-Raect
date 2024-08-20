import React from 'react'
import Search from './Search'

const Header = ({search,setSearch}) => {
  return (
   <header>
    <div className='flex border bg-blue-800 justify-between w-full'>
      <h1></h1>
        <p className='text-4xl text-white py-5 text-center font-serif'>Todo check list</p>
        <div>
          <Search search={search} setSearch={setSearch} />
        </div>
    </div>
    </header>
  )
}

export default Header