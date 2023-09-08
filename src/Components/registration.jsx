import React from 'react';

const Registration = ({ registrationData }) => {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {registrationData.map((item, index) => (
          <div className='h-fit m-4'>
            {(index === 1) ?
              <div key={index} className="bg-white shadow-md rounded-lg h-fit pb-1">
                <div className="bg-red-500 p-4 mb-3 text-white text-center rounded-t-lg">

                  <h2 className="text-2xl font-bold">Registration</h2>
                </div>

                <div className='text-black px-2'>
                  <img className="w-full mb-2 p-3" src={item.imageurl} alt="generic" loading='lazy' />
                  <p className="text-center mb-2 font-semibold text-2xl">{item.day}</p>
                  <div className='flex justify-between px-4'>
                    <p className="poppins-text text-center mb-2 font-bold">Basic Plan</p>
                    <span className='poppins-text font-normal'>{item.basicplan}</span>
                  </div>
                  <div className="border-b-2 border-gray-300 mb-2 "></div>
                  <div className='flex justify-between px-4'>

                    <p className="text-center text-red-500 font-bold">Premium Plan:</p> <span className='poppins-text text-black font-normal'>{item.premiumplan}</span>
                  </div>
                </div>
                <div className='flex justify-center my-4'>
                  <a href={`${item.url}`} className='text-center px-8 bg-red-500 rounded-full text-white shadow-lg hover:bg-red-400'>
                    Register
                  </a>
                </div>
              </div>
              : (
                <div key={index} className="bg-neutral-300 shadow-md m-2 rounded-lg h-fit pb-1">
                  <div className="bg-red-300 p-4 text-white mb-3 text-center rounded-t-lg">

                    <h2 className="text-2xl font-bold">Registration</h2>
                  </div>

                  <div className='text-neutral-500 px-2'>
                    <img className="w-full mb-2 p-3 contrast-50" src={item.imageurl} alt="generic" loading='lazy' />
                    <p className="text-center mb-2 font-semibold text-2xl">{item.day}</p>
                    <div className='flex justify-between px-4'>
                      <p className="poppins-text text-center mb-2 font-bold">Basic Plan</p>
                      <span className='poppins-text font-normal'>{item.basicplan}</span>
                    </div>
                    <div className="border-b-2 border-gray-300 mb-2 "></div>
                    <div className='flex justify-between px-4'>

                      <p className="text-center text-red-300 font-bold">Premium Plan:</p> <span className='poppins-text text-gray font-normal'>{item.premiumplan}</span>
                    </div>
                  </div>
                  <div className='flex justify-center my-4'>
                    <button className='text-center px-8 bg-red-300 rounded-full text-gray shadow-lg hover:bg-red-400 pointer-events-none' disabled>
                      Register
                    </button>
                  </div>
                </div>
              )}</div>
        ))}
      </div>
    </div>
  );
};

export default Registration;
