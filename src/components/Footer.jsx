import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='lg:hidden w-full md:h-full bg-dark'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow'>Social Media</p>
          <p className='py-6 text-gray-300'>Check out some my social media</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-7'>

          <div className='flex flex-col justify-center'>
            <a href="https://www.linkedin.com/in/ramadhanriz/" target={"_blank"} className='flex flex-col-reverse justify-between items-center text-gray-300 text-lg'>Linkedin <FaLinkedin /></a>
          </div>
          
          <div className='flex flex-col justify-center'>
            <a href="https://github.com/ramadanriz" target={"_blank"} className='flex flex-col-reverse justify-between items-center text-gray-300 text-lg'>Github <FaGithub /></a>
          </div>

          <div className='flex flex-col justify-center'>
            <a href="https://www.instagram.com/rzk_rmdn/" target={"_blank"} className='flex flex-col-reverse justify-between items-center text-gray-300 text-lg'>Instagram <BsInstagram /></a>
          </div>

          <div className='flex flex-col justify-center'>
            <a href="https://drive.google.com/uc?export=download&id=1Qr6F67qbnUe49JqiG9ULGZMgML-SMmcI" className='flex flex-col-reverse justify-between items-center text-gray-300 text-lg'>My Resume <BsPersonLinesFill /></a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer