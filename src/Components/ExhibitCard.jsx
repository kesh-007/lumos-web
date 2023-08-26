import React, { useState } from 'react';
import '../App.css';


const ExhibitCard = ({ exhibits }) => {

  return (
    <div className='grid grid-cols-1 gap-5  max-md:flex xl:grid-cols-2 max-md:flex-col '>
      {exhibits.map((exhibit) => (
        <div className='flex mx-1x mb-3 bg-[#2A2929] max-md:flex-col justify-center h-[100%]' key={exhibit.id}>
          <div className='md:w-full max-md:w-full'>
            <img src={exhibit.imageurl} alt='exhibits' className='w-full' loading='lazy' />
          </div>
          <div className='w-full h-fit'>
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
