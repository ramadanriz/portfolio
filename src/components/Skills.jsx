import React from 'react'
import Bootstrap from '../assets/bootstrap.png'
import CSS from '../assets/css.png'
import Github from '../assets/github.png'
import HTML from '../assets/html.png'
import JS from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Webpack from '../assets/webpack.png'
import Git from '../assets/git.png'
import MySQL from '../assets/mysql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-dark text-gray-300 py-10'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline border-b-4 border-yellow font-bold'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div>
                    <img src={HTML} alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div>
                    <img src={CSS} alt="CSS icon" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div>
                    <img src={JS} alt="JS icon" className='w-20 mx-auto'/>
                    <p className='my-4'>JS</p>
                </div>
                <div>
                    <img src={Git} alt="Git icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Git</p>
                </div>
                <div>
                    <img src={Github} alt="Github icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Github</p>
                </div>
                <div>
                    <img src={Bootstrap} alt="Bootstrap icon" className='w-24 mx-auto'/>
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div>
                    <img src={Node} alt="Node icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Node</p>
                </div>
                <div>
                    <img src={ReactImg} alt="React icon" className='w-20 mx-auto'/>
                    <p className='my-4'>React</p>
                </div>
                <div>
                    <img src={Tailwind} alt="Tailwind icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div>
                    <img src={Webpack} alt="Webpack icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Webpack</p>
                </div>
                <div>
                    <img src={MySQL} alt="MySQL icon" className='w-32 mx-auto'/>
                    <p className='my-4'>MySQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills