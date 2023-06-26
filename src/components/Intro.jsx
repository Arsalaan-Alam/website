import React from 'react';

function Intro(){
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-12'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Arsalaan</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Programmer & Aspiring Rationalist</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>Hi, I'm Arsalaan (ars-a-laan). I'm situated in Delhi, India. I've been a programmer for the last 6 years. My technical interests include: full-stack web development, machine-learning, zero-knowledge proofs, web3 infrastructure & AGI Safety. My intellectual interests include: rationalism, philosophy (epistemology & ethics), effective altruism & cognition. <br></br> <br></br> 
            I'm currently on summer break and would be joining university in August. I'm building a decentralized platform for medical files sharing & storage which also solves the problem of medical data shortage for training AI models. If you share mutual interests, or are intrigued by my work, or just wanna say hi. Please reach out!
            </p>
            
        </div>
    )
}
export default Intro;