import React from 'react'

const About = () => {
  return (
    <>
      <div className='max-w-6xl mx-auto space-y-4 p-4'>
        <h1 className='text-2xl font-medium text-amber-600'>About us</h1>
        <p>
        Hello friends
        </p>
          <p>
       This is Abhishek I am a student of  computer science I have created IMDB Clone 
        </p>
        <p>This website bulid in tailwind css which framework of css 
       and next js which framework of React js</p>
        <div className='flex space-x-2'>
          
        <h3>Follow us : </h3>
        <p className='text-cyan-600'><a href='https://www.linkedin.com/in/abhishek-c-v/' target={"_blank"}>linkdin</a></p>
        <p className='text-cyan-600'><a href='https://github.com/Abhisheklips' target={"_blank"}>GitHub</a></p>
        <p className='text-cyan-600'><a href='https://geekcvtech.blogspot.com/?m=1' target={"_blank"}>Web Site</a></p>
        <p className='text-cyan-600'><a href='https://www.instagram.com/__abhishek_c_v/' target={"_blank"}>Instagram</a></p>

        </div>

      </div>
    </>
  )
}

export default About
