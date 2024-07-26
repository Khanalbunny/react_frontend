import React from 'react'

function Banner() {
  return (
    <div>
           <div className='h-lv w-full bg-local relative'>
        <img src="/src/assets/twobaby.png" className='w-full object-cover h-full' alt="" srcset="" />
        <div class=" w-fit absolute top-16 left-32 h-auto flex flex-col
         place-content-center justify-center z-10 p-24  bg-white rounded-[96px] gap-3 text-red-600">
          <div className='w-7/12 text-8xl text-[#423f8d]'>Quality </div>
          <div className=' text-8xl text-[#423f8d]'>Learning </div>
          <div className='text-4xl font-extrabold text-[#fbce0f] '>For Every Child</div>
          <div className=' w-fit  bg-[#Ed078b] text-white rounded-full px-10 py-4 place-content-start items-start font-sans'><button >Explore Classes</button></div>
        </div>
      </div>

      
    </div>
  )
}

export default Banner
