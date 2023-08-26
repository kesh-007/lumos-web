import React from 'react';

function EventCard({ data }) {


  return (
    <div className=' grid grid-cols-3 gap-[3rem] text-white max-md:grid-cols-1 '>
      {data.map((datum, index) => (
        <div data-aos="zoom-in" className={`h-auto w-auto mb-[3rem] rounded-full ${index === 9 ? ' ' : ''}`}>
          <div style={{ height: "60%" }}>
            <img src={datum.image} className='w-[18.5rem] h-[70%]' alt={datum.event_name} />
            <div className='bg-[#1F1F1F] w-[18.5rem]' style={{ height: "100%", padding: "8px" }}>
              <div className='flex justify-between'>
                <h1 className='text-3xl mb-[.5rem]'>{datum.event_name}</h1>
                {
                  datum.Premium &&
                  <div className='text-white text-sm h-[1.2rem] rounded-md px-2 font-bold bg-[#FF0000] mt-2'>Premium</div>
                }
              </div>
              <div className='poppins-text text-[0.74rem] w-[17rem]' style={{ height: "100%" }}>{datum.event_decp}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCard;
