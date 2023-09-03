import React from 'react';

const RegistrationMatrix = ({ matrix }) => {

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 mx-8'>
        {/* Plan Column */}
        <div className='grid gap-4 invisible absolute xl:visible xl:relative'>
          <div className='poppins-text text-white bg-red-700 text-2xl p-4 h-fit'>PLAN</div>
          <img src={process.env.PUBLIC_URL + "/img/general.png"} alt='general' className='w-[30rem] h-[20rem] object-cover' />
          <img src={process.env.PUBLIC_URL + "/img/premium.png"} alt='general' className='w-[30rem] h-[20rem] object-cover' />
        </div>

        {/* Day 1 Column */}
        <div className='grid gap-4 col-span-2 flex flex-row'>
          <div className='poppins-text text-white bg-red-700 text-2xl p-4 h-fit row-span-1'>DAY 1</div>
          <div className='row-span-4 h-fit bg-neutral-900 p-4 xl:p-8 lg:h-[20rem]'>
            <div className='text-white text-xl py-4 xl:invisible xl:absolute'>General Plan</div>
            <div className='grid grid-cols-1 gap-4 m-0 lg:grid-cols-2 xl:grid-cols-3'>
              {matrix[0].map(name => (
                <div className='poppins-text text-white text-xs md:text-sm lg:text-md border-2 border-yellow-400 flex justify-center text-center items-center rounded-lg p-2 hover:border-yellow-600'>{name}</div>
              ))}
            </div>
          </div>
          <div className='row-span-4 h-[20rem] bg-neutral-900 p-4 xl:p-8'>
            <div className='text-yellow-400 text-xl py-4 xl:invisible xl:absolute'>Premium Plan</div>
            <div className='grid grid-cols-1 gap-4 m-0 lg:grid-cols-2 xl:grid-cols-3'>
              {matrix[1].map(name => (
                <div className='poppins-text text-white text-xs md:text-sm lg:text-md border-2 border-yellow-400 flex justify-center text-center items-center rounded-lg p-2 hover:border-yellow-600'>{name}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Day 2 Column */}
        <div className='grid gap-4 col-span-2 flex flex-row'>
          <div className='poppins-text text-white bg-red-700 text-2xl p-4 h-fit row-span-1'>DAY 2</div>
          <div className='row-span-4 h-fit bg-neutral-900 p-4 xl:p-8 lg:h-[20rem]'>
            <div className='text-white text-xl py-4 xl:invisible xl:absolute'>General Plan</div>
            <div className='grid grid-cols-1 gap-4 m-0 lg:grid-cols-2 xl:grid-cols-3'>
              {matrix[2].map(name => (
                <div className='poppins-text text-white text-xs md:text-sm lg:text-md border-2 border-yellow-400 flex justify-center text-center items-center rounded-lg p-2 hover:border-yellow-600'>{name}</div>
              ))}
            </div>
          </div>
          <div className='row-span-4 h-[20rem] bg-neutral-900 p-4 xl:p-8'>
            <div className='text-yellow-400 text-xl py-4 xl:invisible xl:absolute'>Premium Plan</div>
            <div className='grid grid-cols-1 gap-4 m-0 lg:grid-cols-2 xl:grid-cols-3'>
              {matrix[3].map(name => (
                <div className='poppins-text text-white text-xs md:text-sm lg:text-md border-2 border-yellow-400 flex justify-center text-center items-center rounded-lg p-2 hover:border-yellow-600'>{name}</div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {registrationData.map((item, index) => (
          <div key={index} className="bg-white shadow-md m-2">
            <div className="bg-red-500 p-4 text-white mb-3 text-center">

              <h2 className="text-2xl font-bold">Registration</h2>
            </div>

            <div className='text-black px-2'>
              <img className="w-full mb-2 p-3" src={item.imageurl} alt="Image" loading='lazy' />
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
            <div className='flex justify-center mt-4 mb-4'>
              <a href={`${item.url}`} className='text-center px-8 bg-red-500 rounded-full text-white shadow-lg hover:bg-red-400'>
                Register
              </a>
            </div>
          </div>
        ))}*/}
      </div>
    </div>
  );
};

export default RegistrationMatrix;
