import React, { useState } from 'react';
import '../App.css';


const WorkshopCard = ({ imageurl, name, descp, isImageOnLeft, Premium, day }) => {


  return (
    <div
      data-aos="zoom-out "
      className={` w-full h-max max-md:h-auto flex rounded-lg mb-[1rem] bg-[#2A2A2A]  max-md:flex-col
      ${isImageOnLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className='w-[70%] max-md:w-full'>
        <div className='h-fit relative'>
          <img src={imageurl} alt='workshop poster' className='w-full rounded-t-lg lg:rounded-none' loading='lazy' />
          <div className='poppins-text absolute bottom-4 right-8 bg-white text-black rounded-full text-md p-2 backdrop-filter backdrop-blur-lg bg-opacity-30'>Day {day}</div>
        </div>
      </div>
      <div className='w-full h-auto'>
        <div className='bg-white text-black font-bold text-3xl p-4 flex justify-between'>
          <p>{name}</p>
          {
            Premium && <div className='text-white text-sm h-[2rem] text-center rounded-md px-3 font-normal bg-[#FF0000] items-center flex'>Premium</div>
          }

        </div>
        <div className='poppins-text p-6 tracking-wide  max-md:text-sm max-sm:text-sm text-lg'>
          <p>{descp}</p>
          {
            (name === 'COSPLAY WORKSHOP') &&
            <div>
              <br />
              <a href="#competitions" className='poppins-text bg-transparent hover:bg-red-700 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded-lg text-lg'>
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
