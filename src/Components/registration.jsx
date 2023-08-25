import React from 'react';

const Registration = ({registrationData}) => {

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {registrationData.map((item, index) => (
          <div key={index} className="bg-white shadow-md ">
                  <div className="bg-red-500 p-4 text-white mb-3 text-center">

                    <h2 className="text-lg font-bold">Registration</h2>
                    </div>

<div className='text-black'>
            <img className="w-full mb-2 p-3" src={item.imageurl} alt="Image" />
            <p className="text-center mb-2 font-bold text-xl">{item.day}</p>
            <div className='flex justify-between px-4'>
            <p className="text-center mb-2 font-bold">Basic Plan</p> 
            <span className='font-normal'>${item.basicplan}</span>
            </div>
            <div className="border-b-2 border-gray-300 mb-2 "></div>
            <div className='flex justify-between px-4'>

            <p className="text-center text-red-500 font-bold">Premium Plan:</p> <span className='text-black font-normal'>${item.premiumplan}</span>
            </div>
            </div>
            <div className='flex justify-center mt-4 mb-4'>
            <a href={`${item.url}`} className='text-center px-2 bg-red-500 rounded-full font-bold text-white '>
                Register
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registration;
