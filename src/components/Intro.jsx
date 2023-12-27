import React from 'react';

function Intro(){
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-12'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Arsalaan</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Programmer & Aspiring Rationalist</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>Hi, I'm Arsalaan (ars-a-laan). I'm situated in Delhi, India. I've been a programmer for the last 6 years. My technical interests include: full-stack web development, machine-learning, zero-knowledge proofs, web3 infrastructure & AGI Safety. My intellectual interests include: rationalism, philosophy (epistemology & ethics), effective altruism & cognition. <br></br>
            <p className='mt-4'>I'm currently working on DApilink which is a confidential Oracle solution built on the Sapphire Blockchain. We provide a plug and play mechanism to interact with blockchains without bridges, external data sources and without oracles deployed on specific blockchains. We were <a href="https://tinyurl.com/Dapilink" className='text-blue-600' target='_blank'> live </a> at Gitcoin Season 19.</p>  
          
            </p>
            
        </div>
    )
}
export default Intro;