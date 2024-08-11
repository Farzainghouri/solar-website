import React from 'react'
import image1 from "./assets/svg.png";
import image2 from "./assets/svg2.png";

function Boxes() {
  return (
    <div className='w-full   bg-[#1A1714] pb-10 '>
        <div className='w-full  flex justify-center flex-col items-center '>
        <h1 className=' text-[30px] mx-2 font-serif font-bold sm:text-[60px] text-white '><span className='text-[#EB7F25]'> SOLAR</span> SAVER TOOLS</h1>
         <p className=' mx-4 text-white text-center'>There are many variations of Solar Saver tools available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className='ml-4 mt-10 grid-cols-1  grid sm:grid-cols-3 gap-8 sm:ml-5 sm:mx-5'>
          <div className='h-[200px] w-[90vw] bg-[#1f1c19] rounded-xl sm:w-[340px]'>
            <img src={image2} alt="image" className='p-4'/>
            <div className='mx-6'>
            <p className=' text-white'>Lorem, ipsum.</p>
            <p  className=' text-white' >production estimates.</p>
            </div>
          </div>
          <div className='h-[200px] w-[90vw] bg-[#1f1c19] rounded-xl sm:w-[340px]'>
            <img src={image1} alt="image" className='p-4'/>
            <div className='mx-6'>
            <p className=' text-white'>Minimal training time for
            </p>
            <p  className=' text-white' >new sales representatives.</p>
            </div>
          </div>
          <div className='h-[200px] w-[90vw]  rounded-xl sm:w-[340px] bg-[#1f1c19]'>
            <img src={image2} alt="image" className='p-4'/>
            <div className='mx-6'>
            <p className=' text-white'>Homeowner-focused
            proposal</p>
            <p  className=' text-white' >design for clarity</p>
            </div>
          </div>
          <div className='h-[200px] w-[90vw]  rounded-xl sm:w-[340px] bg-[#1f1c19]'>
            <img src={image2} alt="image" className='p-4'/>
            <div className='mx-6'>
            <p className=' text-white'>Customizable solar sales</p>
            <p  className=' text-white' >tools for each representative.</p>
            </div>
          </div>
          <div className='h-[200px] w-[90vw]  rounded-xl sm:w-[340px] bg-[#1f1c19]'>
            <img src={image2} alt="image" className='p-4'/>
            <div className='mx-6'>
            <p className=' text-white'>Quick and accurate</p>
            <p  className=' text-white' >solar sales proposals.</p>
            </div>
          </div>
          <div className='h-[200px] w-[90vw]  rounded-xl sm:w-[340px] bg-[#1f1c19]'>
            <img src={image2} alt="image" className='p-4'/>
            <div className='mx-6'>
            <p className=' text-white'>Smart management features for</p>
            <p  className=' text-white' >effective team coordination..</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Boxes