import React from 'react';
import hackathons from '../data/hackathons';
import HackathonItem from './HackathonItem';
import Title from './Title';

function Timeline(){
    return (
        <div className='flex flex-col md:flex-row justify-center my-20'>
         <div className='w-full md:w-7/12'>
         <Title>Winning List</Title>
            {hackathons.map(item => (
                <HackathonItem
                year = {item.year}
                title = {item.title}
                duration = {item.duration}
                details= {item.details}                
                />
            ))}
         </div>
        </div>
    )
}
export default Timeline;