import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='bg-dark w-full h-screen'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 lg:px-[100px] flex flex-col justify-center h-full'>
            <p className='text-yellow'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rizky Ramadhani</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-text'>I'm a Web Developer.</h2>
            <p className='text-text py-4 max-w-[700px]'>I am a person who studies and is interested in front-end web developer. My programming experience started in 2019 and until now I am still learning deeply.</p>

            <Link to="work" smooth={true} offset={-50} duration={500}>
              <button className='group text-white px-6 py-3 my-2 border-2 flex items-center hover:bg-yellow hover:border-yellow hover:text-dark'>View Work
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
              </button>
            </Link>
        </div>
    </div>
  )
}

export default Home