import React from 'react'

const Suggestions = () => {
    return (
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="0.05" d="M0,160L30,181.3C60,203,120,245,180,234.7C240,224,300,160,360,149.3C420,139,480,181,540,192C600,203,660,181,720,154.7C780,128,840,96,900,117.3C960,139,1020,213,1080,213.3C1140,213,1200,139,1260,122.7C1320,107,1380,149,1410,170.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>

            <div>
                <div className='bg-[#e7008a] bg-opacity-5  flex flex-col gap-10 justify-center items-center '>
                    <img className=' object-none object-center' src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/testimonial.png" alt="" srcset="" />
                    <div className='flex w-8/12 text-center  text-2xl font-sans text-[#494691] justify-center items-center leading-10 '>
                        "Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our expert are just part of the reason. Bluehost is the idel home for your Wordpress website. We're here to help you succeed!"
                    </div>
                    <div className='flex gap-5 mb-20'>
                        <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/founder-img.svg" alt="" srcset="" />
                        <div className=''>
                            <div className='text-[#e7008a] text-2xl'>Bunny Khanal</div>
                            <div className='text-[#494691] font-sans opacity-75'>Designer @Bunnylib</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 '>
                        <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/instra2.png" alt="" srcset="" />
                        <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/instra3.png" alt="" srcset="" />
                        <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/instra4.png" alt="" srcset="" />
                        <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/instra1.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestions
