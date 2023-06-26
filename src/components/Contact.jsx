import React from 'react';
import Title from './Title';
function Contact(){
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form 
                action="https://getform.io/f/e3a98ba1-dcaf-4075-8a03-60a86c97546f"
                method='POST'
                className='flex flex-col w-full md:w-7/12'>
                     <Title>Contact</Title>
                    <input 
                    type="text" 
                    name='name'
                    placeholder='Name'
                    className='p-2 bg-transpart border-2 rounded-md focus:outline-none'
                    />
                    <input 
                    type="text" 
                    name='email'
                    placeholder='Email'
                    className='my-2 p-2 bg-transpart border-2 rounded-md focus:outline-none'
                    />
                    <textarea name="message" placeholder="Message" rows="10" className='mb-4 p-2 bg-transpart border-2 rounded-md focus:outline-none'></textarea>
                    <button type='button' className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md'>
                        Work With Me
                    </button>
                </form>

            </div>
        </div>
    )
}
export default Contact;