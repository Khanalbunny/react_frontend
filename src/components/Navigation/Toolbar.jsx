import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

function Toolbar() {
  const [Shows, setShows] = useState(true)
  useEffect(() => {
    window.addEventListener('scroll', function(){
      if(pageYOffset>=400 || pageYOffset<=20){
        console.log(pageYOffset)
        setShows(true)
      }else{
        setShows(false)
      }
    })
  
    return () => {
      window.removeEventListener('scroll', function(){
        if(pageYOffset>=300 || pageYOffset<=20){
          setShows(true)
        }else{
          setShows(false)
        }
            })
    }
  }, [Shows])
  
  return (
    <div className={`w-full transition-all duration-700 delay-150 ease-in-out bg-white sticky ${!Shows?'-translate-y-96':'translate-y-0'} shadow-md hit  left-0 top-0 z-50`}>

      <div className=' w-full h-10 bg-[#Ed078b] font-normal text-white flex place-content-start gap-10 z-50 items-center grid-cols-2'>
        <div className='mx-auto  w-11/12 flex justify-between text-xs  gap-5 items-center'>
          <div className='flex gap-4 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" /></svg>
            <p>  57/A, GREEN LANE, NYC </p>

            <svg xmlns="http://www.w3.org/2000/svg" className=' w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0" /></svg>
            <p>+10 (78) 367 3692</p>
          </div>
          
          <div className='  flex gap-6 items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
          </div>
        </div>


      </div>

      <div className='mx-auto w-11/12 h-20 bg-white font-bold text-[#423f8d] flex place-content-start  items-center  '>
        <div > 
          <img src="/src/assets/logoTop.webp" alt="" srcset="" />
          </div>
        <div className='mx-auto w-11/12 flex place-content-end gap-10 items-center'>
         <div className='hover:text-pink-400 hover:border-b-4 hover:border-pink-400'> <Link to='/' >Home</Link ></div>
         <div className='hover:text-pink-400 hover:border-b-4 hover:border-pink-400'> <Link to='/Class' >Class</Link ></div>
         <div className='hover:text-pink-400 hover:border-b-4 hover:border-pink-400'> <Link to='/About' >About</Link ></div>
         <div className='hover:text-pink-400 hover:border-b-4 hover:border-pink-400'> <Link to='/Blog' >Blog</Link ></div>
         <div className='hover:text-pink-400 hover:border-b-4 hover:border-pink-400'> <Link to='/Contact' >Contact</Link ></div>
          <div> <button className='bg-[#12d9df] text-white rounded-full px-10 py-3'>Enroll Now</button> </div>
        </div>


      </div>


    </div>

  )
}

export default Toolbar
