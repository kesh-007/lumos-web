import React from 'react';
import '../App.css';


function EventCard({ data }) {


  return (
    <div className='grid grid-cols-1 gap-[3rem] text-white sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {data.map((datum, index) => (
        <div data-aos="zoom-in" className={`h-auto w-auto mb-[3rem] rounded-full ${index === 9 ? ' ' : ''}`}>
          <div style={{ height: "60%" }}>
            <img src={datum.image} className='w-[100%]' alt={datum.event_name} loading="lazy" />
            <div className='bg-[#1F1F1F] w-[100%]' style={{ height: "80%", padding: "16px" }}>
              <br></br>
              <div className='flex justify-between'>
                <h1 className='text-3xl mb-[.5rem]'>{datum.event_name}</h1>
                {
                  datum.Premium &&
                  <div className='text-white text-sm h-[1.2rem] rounded-md px-2 font-bold bg-[#FF0000] mt-2'>Premium</div>
                }
              </div>
              <div className='poppins-text text-[0.74rem] w-[100%] text-justify'>{datum.event_decp}</div>
              {
                datum.register &&
                <div>
                  <br></br>
                  <a href="#competitions" className='poppins-text bg-transparent hover:bg-red-700 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded-lg text-lg'>
                    Register
                  </a>
                </div>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCard;
