
import React from 'react'

const Classoffer = () => {
    const classinfo = [
        {
            images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png`,

            title: [
                {
                    Main: "Inteligent Challenge ",
                    Para: " The words you use in your written comminica speak volume."

                }
            ],
            contex: [
                {
                    titlef: "3-5",
                    subf: "Age Group",
                    titles: "30",
                    subs: "Classes",
                    titlet: "10/h",
                    subt: "Class Price"
                }
            ]
        },
        {
            images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png`,

            title: [
                {
                    Main: "Inteligent Challenge ",
                    Para: " The words you use in your written comminica speak volume."

                }
            ],
            contex: [
                {
                    titlef: "3-5",
                    subf: "Age Group",
                    titles: "30",
                    subs: "Classes",
                    titlet: "10/h",
                    subt: "Class Price"
                }
            ]
        },
        {
            images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img3.png`,

            title: [
                {
                    Main: "Inteligent Challenge ",
                    Para: " The words you use in your written comminica speak volume."

                }
            ],
            contex: [
                {
                    titlef: "3-5",
                    subf: "Age Group",
                    titles: "30",
                    subs: "Classes",
                    titlet: "10/h",
                    subt: "Class Price"
                }
            ]
        },
        {
            images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png`,

            title: [
                {
                    Main: "Inteligent Challenge ",
                    Para: " The words you use in your written comminica speak volume."

                }
            ],
            contex: [
                {
                    titlef: "3-5",
                    subf: "Age Group",
                    titles: "30",
                    subs: "Classes",
                    titlet: "10/h",
                    subt: "Class Price"
                }
            ]
        },
        {
            images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png`,

            title: [
                {
                    Main: "Inteligent Challenge ",
                    Para: " The words you use in your written comminica speak volume."

                }
            ],
            contex: [
                {
                    titlef: "3-5",
                    subf: "Age Group",
                    titles: "30",
                    subs: "Classes",
                    titlet: "10/h",
                    subt: "Class Price"
                }
            ]
        },
        {
            images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png`,

            title: [
                {
                    Main: "Inteligent Challenge ",
                    Para: " The words you use in your written comminica speak volume."

                }
            ],
            contex: [
                {
                    titlef: "3-5",
                    subf: "Age Group",
                    titles: "30",
                    subs: "Classes",
                    titlet: "10/h",
                    subt: "Class Price"
                }
            ]
        },



    ]
    return (
        <div>
            <div >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="0.05" d="M0,160L30,181.3C60,203,120,245,180,234.7C240,224,300,160,360,149.3C420,139,480,181,540,192C600,203,660,181,720,154.7C780,128,840,96,900,117.3C960,139,1020,213,1080,213.3C1140,213,1200,139,1260,122.7C1320,107,1380,149,1410,170.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>


            </div>

            <div className='grid gap-8 bg-[#e7008a] bg-opacity-5'>
                <div className='mx-auto w-11/12 '>
                    <p className=' text-[#423f8d] text-4xl font-extrabold text-center'>Classes We Offer</p>
                </div>
                <div className='mx-auto w-6/12 font-sans text-center font-normal text-[#7371ab] '>
                    Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.
                </div>

                <div className='mx-auto grid gap-5 mt-12 w-10/12 snap-center'>
                    <div className='grid grid-cols-3 gap-5 '>
                        {classinfo.map((val, ind) => {
                            return (
                                <div className=' mx-auto w-11/12 hover:shadow-pink-200 shadow-lg rounded-b-3xl overflow-x-scroll mb-10'>
                                    <div className='object-cover w-full   '><img src={val.images} alt="" className='w-full h-full object-cover' srcset="" /></div>
                                    <div >
                                        {val?.title.map((item, ind) => {
                                            console.log(item)
                                            return (<div className='px-8 py-6 bg-white grid gap-3 '>
                                                <div className='text-[#423fed] text-2xl hover:text-[#ed078b] '>{item.Main} </div>
                                                <div className='text-black text-opacity-85 font-sans w-11/12 leading-loose '>{item.Para}</div>
                                            </div>)

                                        })

                                        }

                                    </div>
                                    <hr />
                                    <div className='flex px-8 py-6 bg-white rounded-b-3xl  '>
                                        {
                                            val?.contex.map((item, ind) => {
                                                console.log(item)
                                                return (
                                                    <div className='flex gap-10 pb-5'>
                                                        <div>
                                                            <div className='text-pink-500'>{item.titlef}</div>
                                                            <div className='text-gray-500' >{item.subf}</div>
                                                        </div>
                                                        <div>
                                                            <div className='text-yellow-500'>{item.titles}</div>
                                                            <div className='text-gray-500'>{item.subs}</div>
                                                        </div>
                                                        <div>
                                                            <div className='text-blue-500'>{item.titlet}</div>
                                                            <div className='text-gray-500'>{item.subt}e</div>
                                                        </div>
                                                    </div>


                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className='flex justify-center mb-24'>
                    <button type="button" className='border-pink-500 border-2 text-center w-fit rounded-full  px-16 py-4 text-[#ed078b] hover:bg-pink-500 hover:text-white'>More Classes</button>
                </div>
                
                </div>

            </div>


        </div>
    )
}

export default Classoffer
