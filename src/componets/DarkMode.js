"use client"

import React ,{useEffect,useState}from 'react'
import {BsMoonFill} from 'react-icons/bs'
import {MdLightMode, MdSafetyCheck} from 'react-icons/md'
import { useTheme } from 'next-themes'



const DarkMode = () => {
    const {systemTheme, theme ,setTheme} = useTheme();
    const [mount ,setMount] = useState(false);
    const currenTheme = theme ==='system' ? systemTheme:theme;
    useEffect(()=>setMount(true),[])
  return (
    <>
      { mount && currenTheme === 'dark'? (
      <MdLightMode 
      onClick={() => setTheme('light')}  
      className="text-xl cursor-pointer hover:text-amber-500"/>
      ): (
      <BsMoonFill 
      onClick={() => setTheme('dark')}   
      className="text-xl cursor-pointer hover:text-amber-500"/>
      )}
    </>
  )
}

export default DarkMode
