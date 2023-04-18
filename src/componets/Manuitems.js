
import Link from 'next/link'
import React from 'react'

const Manuitems = ({title , address, Icon }) => {
  return (
    <>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-200">
            <Icon  className="text-2xl sm:hidden mx-2"/>
            <span className='hidden sm:inline my-2 text-sm'>{title}</span>
        </Link>
    </>
  )
}

export default Manuitems
