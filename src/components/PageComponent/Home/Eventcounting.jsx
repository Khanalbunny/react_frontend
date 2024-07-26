import React from 'react'

const Eventcounting = () => {
    return (
        <div>
            <div className='relative w-full h-screen bg-local'>
  <img src="/src/assets/painting.jpg" className='w-full h-full object-cover' alt="Background" />
  <div className='absolute inset-0 flex justify-center items-center'>
    <div className="w-full max-w-md px-6 py-12 bg-white rounded-[96px] text-center shadow-lg z-10">
      <div className='text-[#e7008a] text-xl font-semibold'>18 Jan 2021</div>
      <div className='text-[#423f8d] text-4xl font-bold mt-2'>Drawing Event</div>
      <div className='text-[#423f8d] mt-4 font-sans'>
        Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today moving in fourth.
      </div>
      <button type="button" className='mt-6 px-12  py-3 bg-[#e7008a] text-white rounded-full hover:bg-rose-400 hover:text-white '>View Event</button>
      <div className='flex justify-around mt-8'>
        <div className='text-center bg-[#fffae7] px-5 py-3 rounded-xl'>
          <div className='text-2xl font-bold '>30</div>
          <div className='text-sm text-gray-600'>Days</div>
        </div>
        <div className='text-center bg-[#fffae7] px-5 py-3 rounded-xl'>
          <div className='text-2xl font-bold'>22</div>
          <div className='text-sm text-gray-600'>Hrs</div>
        </div>
        <div className='text-center bg-[#fffae7] px-5 py-3 rounded-xl'>
          <div className='text-2xl font-bold'>21</div>
          <div className='text-sm text-gray-600'>Mins</div>
        </div>
        <div className='text-center bg-[#fffae7] px-5 py-3 rounded-xl'>
          <div className='text-2xl font-bold'>57</div>
          <div className='text-sm text-gray-600'>Secs</div>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}

export default Eventcounting
