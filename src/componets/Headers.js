import React from 'react'
import Manuitems from './Manuitems'
import { AiOutlineHome, AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'
import DarkMode from './DarkMode'

const Headers = () => {
  return (
    <>

      <div className='flex justify-between mx-2 max-w-5xl sm:mx-auto items-center py-4'>
        <div className='flex'>
          <Manuitems title={"HOME"} address={"/"} Icon={AiOutlineHome} />
          <Manuitems title={"ABOUT"} address={"/about"} Icon={AiFillInfoCircle} />
        </div>

        <div className='flex items-center space-x-5'> 
            <DarkMode />
          <Link href={"/"}>
            <h2 className='text-2xl'>
              <span className='font-bold bg-amber-500 py-1 rounded-lg'>IMDB</span>
              <span className='text-xl hidden sm:inline ' >Clone</span>
            </h2>
          </Link>
        </div>
      </div>
      
    </>
  )
}

export default Headers
