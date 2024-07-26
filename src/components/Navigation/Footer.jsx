import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className=' bg-[#4255a4] grid  gap-10'>
                <div className=' flex gap-10 w-10/12 mx-auto mt-24 '>
                    <div className=' w-6/12 grid gap-7 '>
                        <div>
                            <img src="/src/assets/footer-logo.webp" alt="" srcset="" />
                        </div>
                        <p className='w-8/12 font-sans text-[#fbfbfd]  text-opacity-85 text-justify flex leading-loose'>
                            Users and submit their own items. You can create different packages and by connecting with your PayPal or Stripe account charge users for registration.
                        </p>
                        <div className='  flex gap-6 items-center '>
                            <div className=' rounded-full p-2 bg-[#485aad] hover:bg-[#Ed078b]'><svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5 hover:bg-[#Ed078b]' viewBox="0 0 24 24"><path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg></div>
                            <div className='rounded-full p-2 bg-[#485aad] hover:bg-[#Ed078b]'> <svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5 hover:bg-[#Ed078b]' viewBox="0 0 24 24"><path fill="white" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg></div>
                            <div className='rounded-full p-2 bg-[#485aad] hover:bg-[#Ed078b]'> <svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5 hover:bg-[#Ed078b]' viewBox="0 0 24 24"><path fill="white" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" /></svg></div>
                            <div className='rounded-full p-2 bg-[#485aad] hover:bg-[#Ed078b]'><svg xmlns="http://www.w3.org/2000/svg" className='text-2xl w-5 h-5  hover:bg-[#Ed078b]' viewBox="0 0 24 24"><path fill="white" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg></div>
                        </div>
                    </div>
                    <div className='grid gap-7  '>
                        <div className='text-white text-2xl'>
                            Quick Links
                        </div>
                        <div className='text-[#fbfbfd] text-opacity-85 font-sans grid gap-5'>
                            <p className='hover:text-cyan-300 '><a href="#"> Classes </a></p>
                            <p className='hover:text-cyan-300 '><a href="#"> Join with us </a></p>
                            <p className='hover:text-cyan-300 '><a href="#"> About </a></p>
                            <p className='hover:text-cyan-300 '><a href="#"> Blog </a></p>
                            <p className='hover:text-cyan-300 '><a href="#"> Events </a></p>

                        </div>
                    </div>
                    <div className=' grid gap-7 items-center ml-48  '>
                        <div className='text-white text-2xl'>
                            About Us
                        </div>
                        <div className='text-[#fbfbfd] text-opacity-85 font-sans  grid gap-5'>
                            <p className='hover:text-cyan-300 '><a href="#"> Our Team </a></p>
                            <p className='hover:text-cyan-300 '><a href="#"> Privacy Policy </a></p>
                            <p className='hover:text-cyan-300 '><a href="#"> Testimonial </a></p>
                            <p className='hover:text-cyan-300 '><a href="#"> Programing </a></p>
                            <p className='hover:text-cyan-300 '><a href="#"> User Stories </a></p>
                        </div>
                    </div>
                    
                </div>
                <div className='text-center text-[#fbfbfd] font-sans m-10 '>
                Copyright ©2024 All rights reserved | Made with  by Bunny
                </div>
            </div>

        </div>
    )
}

export default Footer
