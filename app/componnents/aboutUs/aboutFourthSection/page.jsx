import React from 'react'
import TopCardHeading from '../aboutTopCard/topCardHeading/page'
import FourthSectionCard from './fourthSectionCard/page'

const AboutFourthSection = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[url("/ocean.jpg")] w-full bg-cover bg-center sm:px-20 md:px-40 py-40 bg-blend-overlay bg-zinc-900 mt-16 gap-10'>
      <h2 className='text-2xl w-fit text-white font-bold'>The ABETUP Manifesto</h2>
      <div className='flex gap-20 flex-wrap items-center justify-center'>
      <FourthSectionCard heading={"We are Transparent"}/>
      <FourthSectionCard heading={"We are Transparent"}/>
      <FourthSectionCard heading={"We are Transparent"}/>
      <FourthSectionCard heading={"We are Transparent"}/>
      <FourthSectionCard heading={"We are Transparent"}/>
      <FourthSectionCard heading={"We are Transparent"}/>


    </div>

    </div>
  )
}

export default AboutFourthSection
