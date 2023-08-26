import React from 'react'

const CompetitionCard = ({competitions}) => {
  return (
    <div className=''>


      {competitions.map((key)=>(
        <>                
        <div className='bg-[#FF2626] px-[2rem] py-2 text-center text-2xl'>
                <p className='font-bold'>Seperate Registration</p>
              </div>
              <div className='flex bg-white px-[2rem] gap-5 py-[2rem] max-md:flex-col'>
                <div className='w-1/3 max-md:h-full max-md:w-full'>
                  <img src={key.imageurl} alt='image' 
                  className='max-md:h-full max-md:w-full'
                  loading='lazy'
                  />
                </div>
                <div className=' w-full text-black'>
                  {
                    key.competition.map((index)=>(
                      <div className='flex flex-col gap-3'>
                        <div className='flex justify-between'>
                      <p className='font-semibold'>{index.val}</p>
                      <a href={`${index.url}`} className='  bg-red-500 text-white px-2 rounded-xl '>
                        REGISTER
                      </a>
                      </div>
                      <div className="border-b-2 border-gray-300 mb-2 "></div>

                      </div>

                    ))
                  }
                </div>

              </div>
        </>


      ))

      }

    </div>
  )
}

export default CompetitionCard
