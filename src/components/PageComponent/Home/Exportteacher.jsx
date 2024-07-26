import React from 'react'

const Exportteacher = () => {
  const teachers = [
    {
      images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png`,

      title: [
        {
          Name: "Bunny Khanal",
          Post: "Sports Instructor"
        }
      ]
    },
    {
      images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png`,

      title: [
        {
          Name: "Bunny Khanal",
          Post: "Sports Instructor"
        }
      ]
    },
    {
      images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png`,

      title: [
        {
          Name: "Bunny Khanal",
          Post: "Sports Instructor"
        }
      ]
    },
    {
      images: `https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png`,

      title: [
        {
          Name: "Bunny Khanal",
          Post: "Sports Instructor"
        }
      ]
    },
    

  ]
  return (
    <div>
      <div className=' mx-auto w-11/12 gap-4  bg-opacity-5 '>
        <div className='mx-auto w-11/12 '>
          <p className=' text-[#423f8d] text-5xl font-extrabold text-center mt-32'>Export Teachers</p>
        </div>
        <div className='mx-auto w-6/12 font-sans text-center font-xl text-[#7371ab] mt-6'>
          Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.
        </div>
        <div className='mx-auto grid gap-5 mt-14 w-10/12 snap-center'>
          <div className='grid grid-cols-4 gap-8 '>
            {teachers.map((val, ind)=>{
              return(
              <div className=' mx-auto  hover:shadow-pink-200 object-fill  rounded-b-3xl overflow-x-scroll mb-10'>
                <div className=''>
                  <img src={val.images} className='rounded-xl hover:fill-pink-100' alt="" srcset="" />
                </div>
                <div>
                  {val?.title.map((item, ind)=>{
                    console.log(item)
                    return(
                      <div className='px-8 py-6 bg-white grid gap-3 text-center ' >
                        <div className='text-[#000000] text-2xl font-serif hover:text-[#ed078b] '>{item.Name}</div>
                        <div className='text-black text-opacity-85 font-sans '>{item.Post}</div>
                      </div>
                    )
                  })
                  }
                </div>
              </div>
              )
            }
            )

            }

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Exportteacher
