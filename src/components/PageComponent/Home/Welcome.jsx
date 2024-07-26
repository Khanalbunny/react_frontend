import React from 'react'

const Welcome = () => {
    return (
        <div>
            <div className='flex-row gap-8'>
                <div className='mx-auto w-11/12  '>
                    <p className='place-content-center items-center mt-20 justify-between text-[#423f8d] text-4xl font-extrabold text-center'>Welcome to our <span className='text-[#Ed078b] text-5xl font-extrabold'>Kindergarten</span></p>
                </div>
                <div className='mx-auto w-7/12 text-center font-sans font-normal text-[#7371ab] mt-6'>
                    Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.
                </div>
            </div>
            <div className="mx-auto w-11/12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="flex flex-col justify-center gap-7 w-10/12  ml-auto ">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <img src="/src/assets/inter.svg" alt="" srcset="" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-blue-600">Inter School Sports</h4>
              <p className="text-[#5C6CB0] w-8/12 font-sans">The words you use in your written communication speak volumes.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center">
            <img src="/src/assets/friendly.svg" alt="" srcset="" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-yellow-600">Friendly Environment</h4>
              <p className="text-[#5C6CB0] w-8/12 font-sans">The words you use in your written communication speak volumes.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center">
            <img src="/src/assets/multimedia.svg" alt="" srcset="" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-teal-600">Multimedia Class</h4>
              <p className="text-[#5C6CB0] w-8/12 font-sans">The words you use in your written communication speak volumes.</p>
            </div>
          </div>
        </div>
        <div>
          <img className="rounded-lg w-full h-full object-cover" src="/src/assets/welcome.webp" alt="Kindergarten" />
        </div>
      </div>

     
        </div>
    )
}

export default Welcome
