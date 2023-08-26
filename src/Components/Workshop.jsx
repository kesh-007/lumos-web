import React, { useState } from 'react';
import '../App.css';


const WorkshopCard = ({ imageurl, name, descp, isImageOnLeft, Premium }) => {


  return (
    <div
      data-aos="zoom-out "
      className={` w-full h-screen max-md:h-auto flex rounded-lg mb-[1rem] bg-[#2A2A2A]  max-md:flex-col
      ${isImageOnLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className='w-[70%] max-md:w-full'>
        <img src={imageurl} alt='workshop poster' className='h-full w-full object-cover' loading='lazy' />
      </div>
      <div className='w-full '>
        <div className='bg-white text-black font-bold text-3xl p-4 flex justify-between'>
          <p>{name}</p>
          {
            Premium && <div className='text-white text-sm h-[2rem] text-center rounded-md px-3 font-normal bg-[#FF0000]'>Premium</div>
          }

        </div>
        <div className='poppins-text p-6 tracking-wide  max-md:text-sm max-sm:text-sm text-lg'>
          <p>{descp}</p>
          {
            (name === 'COSPLAY WORKSHOP') &&
            <div>
              <br />
              <a href="#competitions" className='text-center px-2 bg-red-500 rounded-full text-white '>
                Register
              </a>
            </div>
          }
        </div>
      </div>

    </div>
  );
};

const Workshop = ({ workshop }) => {
  return (
    <div className=''>
      {workshop.map((workshopItem, index) => (
        <div className='' >
          <WorkshopCard
            key={index}
            {...workshopItem}
            isImageOnLeft={index % 2 === 0} // Alternates image placement
          />
        </div>
      ))}
    </div>
  );
};

export default Workshop;
