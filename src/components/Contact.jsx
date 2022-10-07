import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-dark flex justify-center items-center py-10 px-4'>
        <form method='POST' action="https://getform.io/f/3e908178-9288-426c-885a-c4ad20befd9a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below.</p>
            </div>
            <input type="text" className='bg-contact p-2' placeholder='Name' name='name'/>
            <input type="email" className='bg-contact p-2 my-4' placeholder='Email' name='email'/>
            <textarea name="message" rows="10" placeholder='Message' className='bg-contact p-2'></textarea>
            <button className='text-white border-2 hover:bg-yellow hover:border-yellow hover:text-dark px-4 py-3 my-8 mx-auto flex items center'>Let's Collaboration</button>
        </form>
    </div>
  )
}

export default Contact