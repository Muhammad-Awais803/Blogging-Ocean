import React from 'react'
import TopCardHeading from '../aboutTopCard/topCardHeading/page'
import Button from '../../common/button/page'

const AboutSixSection = () => {
  return (
    <div className='flex flex-col bg-slate-900 sm:w-full md:w-[70%] rounded-xl items-center justify-center gap-4 mt-16 py-20'>
      <h2 className='text-4xl font-bold text-white w-full flex items-center justify-center text-center'>If it's thinkable, we make it possible <br/> Lets Talk?</h2>
      <Button title={"Contact Us"}/>
    </div>
  )
}

export default AboutSixSection
