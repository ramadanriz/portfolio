import React from 'react'
import Atalanta from '../assets/projects/atalanta.PNG'
import Avengers from '../assets/projects/avengers.PNG'
import Doit from '../assets/projects/doit.PNG'
import Notes from '../assets/projects/notes.PNG'
import Twice from '../assets/projects/twice.PNG'
import TicTacToe from '../assets/projects/tictactoe.PNG'
import Quiz from '../assets/projects/quiz.PNG'

const Work = () => {
  return (
    <div name="work" className='bg-dark w-full md:h-full text-gray-300 py-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow'>Work</p>
          <p className='py-6'>Check out some my recent work</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
                <img src={Notes} alt="" />
              </div>
              <h5 className='text-2xl md:text-3xl font-bold mt-3'>Notes App React</h5>
              <p className='text-gray-300 mt-3'>Aplikasi catatan menggunakan React.</p>
              <div className='pt-8 text-center'>
                <a href="https://notes-app-react-a4mtd0p2p-ramadanriz.vercel.app/" target={'_blank'}>
                  <button className='links'>Demo</button>
                </a>
                <a href="https://github.com/ramadanriz/notes-app-react" target={'_blank'}>
                <button className='links'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
                <img src={Doit} alt="" />
              </div>
              <h5 className='text-2xl md:text-3xl font-bold mt-3'>Do.it</h5>
              <p className='text-gray-300 mt-3'>Aplikasi pengelola goals dan kegiatan harian. Dibuat untuk capstone project MSIB 2 di Dicoding.</p>
              <div className='pt-8 text-center'>
                <a href="https://doit-sib-project.web.app/" target={'_blank'}>
                  <button className='links'>Demo</button>
                </a>
                <a href="https://github.com/ramadanriz/do-it" target={'_blank'}>
                <button className='links'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
                <img src={Quiz} alt="" />
              </div>
              <h5 className='text-2xl md:text-3xl font-bold mt-3'>Quiz App</h5>
              <p className='text-gray-300 mt-3'>Permainan kuis sederhana yang dibuat menggunakan HTML, CSS, dan Javascript.</p>
              <div className='pt-8 text-center'>
                <a href="https://ramadanriz.github.io/quick-quiz/" target={'_blank'}>
                  <button className='links'>Demo</button>
                </a>
                <a href="https://github.com/ramadanriz/quick-quiz" target={'_blank'}>
                <button className='links'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
                <img src={Avengers} alt="" />
              </div>
              <h5 className='text-2xl md:text-3xl font-bold mt-3'>Avengers Tribute Page</h5>
              <p className='text-gray-300 mt-3'>Project ini berisi tentang tim superhero "Avengers". Dibuat menggunakan HTML, CSS, dan Javascript.</p>
              <div className='pt-8 text-center'>
                <a href="https://ramadanriz.github.io/avengers-tribute-page/" target={'_blank'}>
                  <button className='links'>Demo</button>
                </a>
                <a href="https://github.com/ramadanriz/avengers-tribute-page" target={'_blank'}>
                <button className='links'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
                <img src={Atalanta} alt="" />
              </div>
              <h5 className='text-2xl md:text-3xl font-bold mt-3'>Atalanta Store</h5>
              <p className='text-gray-300 mt-3'>Project ini berisi tentang toko online dari klub sepakbola Atalanta Bergamo asal Italia. Terinspirasi dari website online store resmi dari Atalanta.</p>
              <div className='pt-8 text-center'>
                <a href="https://ramadanriz.github.io/atalanta-online-store/" target={'_blank'}>
                  <button className='links'>Demo</button>
                </a>
                <a href="https://github.com/ramadanriz/atalanta-online-store" target={'_blank'}>
                <button className='links'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
                <img src={Twice} alt="" />
              </div>
              <h5 className='text-2xl md:text-3xl font-bold mt-3'>Twice Website Concept</h5>
              <p className='text-gray-300 mt-3'>Ini adalah project pertama saya. Dalam project ini, berisi tentang profil girlband korea "TWICE". Project dibuat menggunakan HTML dan CSS</p>
              <div className='pt-8 text-center'>
                <a href="https://ramadanriz.github.io/twice-website-concept/" target={'_blank'}>
                  <button className='links'>Demo</button>
                </a>
                <a href="https://github.com/ramadanriz/twice-website-concept" target={'_blank'}>
                <button className='links'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Work