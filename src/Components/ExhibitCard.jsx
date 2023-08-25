import React, { useState } from 'react';
import '../App.css';


const ExhibitCard = ({ exhibits }) => {

  return (
    <div className='grid grid-cols-2 gap-5  max-md:flex max-md:flex-col '>
      {exhibits.map((exhibit) => (
        <div className='flex mx-1x` mb-3 bg-[#2A2929] max-md:flex-col' key={exhibit.id}>
          <div className='w-[40%] max-md:w-full'>
            <img src={exhibit.imageurl} alt='image' className='h-full object-cover' />
          </div>
          <div className='w-full'>
            <div className='bg-[#FF0000] text-4xl p-4 font-bold'>
              <p className=''>{exhibit.name}</p>
            </div>
            <div className='poppins-text bg-[#2A2929] text-white p-3 '>
              <p>{exhibit.descp}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExhibitCard;
