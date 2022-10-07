import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill, BsInstagram } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-dark text-gray-300 z-10'>
      {/* logo */}
      <div>
        <img src={Logo} alt="Logo Images" style={{width: '200px'}}/>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-100} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} offset={-30} duration={500}>Skills</Link></li>
        <li><Link to="work" smooth={true} offset={-50} duration={500}>Work</Link></li>
        <li><Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
      </div>

      {/* mobile menu */}
      <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-dark flex flex-col justify-center items-center'} >
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} offset={-100} duration={500}>About</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} offset={-30} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} offset={-50} duration={500}>Work</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-blue-600'>
            <a href="https://www.linkedin.com/in/ramadhanriz/" target={"_blank"} className='flex justify-between items-center w-full text-gray-300'>Linkedin <FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-slate-900'>
            <a href="https://github.com/ramadanriz" target={"_blank"} className='flex justify-between items-center w-full text-gray-300'>Github <FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-pink-700'>
            <a href="https://www.instagram.com/rzk_rmdn/" target={"_blank"} className='flex justify-between items-center w-full text-gray-300'>Instagram <BsInstagram size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-green-500'>
            <a href="https://drive.google.com/uc?export=download&id=1Qr6F67qbnUe49JqiG9ULGZMgML-SMmcI" className='flex justify-between items-center w-full text-gray-300'>Resume <BsPersonLinesFill size={30}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar