"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'
const Navbaritems = ({title,param}) => {
    const searchParams = useSearchParams()
    const genre =searchParams.get('genre')
  return (
    <div className={`m-4 hover:text-amber-600 font-semibold 
    ${genre && genre ===param && 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg'}`}>
      <Link href={`/?genre=${param}`}>
            {title}
      </Link>
    </div>
  )
}

export default Navbaritems
