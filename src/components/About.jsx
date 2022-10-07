import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-dark text-gray-300 py-10'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='text-4xl font-bold sm:text-right'>
                    <p>Hi, I'm Dhani, nice to meet you. Please take a look round.</p>
                </div>
                <div>
                    <p>I am a person who studies and is interested in front-end web developer. I like and learn more about Javascript programming languages, but not only Javascript that I learn other technology also learn to use websites such as CSS and their framework. My programming experience started in 2019 and until now I am still learning deeply, especially about Javascript and CSS because I am very interested in Front-End Web Developer.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About