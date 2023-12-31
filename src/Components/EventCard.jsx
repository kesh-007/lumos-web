import React from 'react';
import '../App.css';


function EventCard({ data }) {


  return (
    <div className='grid grid-cols-1 gap-[3rem] text-white sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 items-start'>
      {data.map((datum, index) => (
        <div data-aos="zoom-in" data-aos-delay={50 * index} className={`h-auto md:h-[100%] xl:h-[90%] w-auto mb-[3rem] rounded-full ${index === 9 ? ' ' : ''}`}>
          <div style={{ height: "60%" }}>
            <div className='h-fit relative'>
              <img src={datum.image} className='w-[100%] rounded-t-lg' alt={datum.event_name} loading="lazy" />
              <div className='poppins-text absolute bottom-4 right-8 bg-white text-black rounded-full text-md p-2 backdrop-filter backdrop-blur-lg bg-opacity-30'>Day {datum.day}</div>
            </div>

            <div className='bg-[#1F1F1F] w-[100%] h-auto md:h-[99%] 2md:h-[120%] 2sm:h-[99%] lg:h-[90%] xl:h-[90%] 2lg:h-[90%] 3xl:h-[80%] rounded-b-lg' style={{ padding: "16px" }}>
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
                <div className='content-center m-auto items-center'>
                  <br></br>
                  <a href="#competitions" className='poppins-text bg-transparent hover:bg-red-700 active:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded-lg text-xs content-center'>
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
