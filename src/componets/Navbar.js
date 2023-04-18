import React from 'react'
import Navbaritems from './Navbaritems'

const Navbar = () => {
  return (
    <div className='flex justify-center dark:bg-gray-600  bg-amber-100 lg:text-lg p-4'>
      <Navbaritems title={'Trending' } param="fetchTrending"/>
      <Navbaritems title={'Top Rated' } param="fetchTopRated"/>

    </div>
  )
}

export default Navbar
