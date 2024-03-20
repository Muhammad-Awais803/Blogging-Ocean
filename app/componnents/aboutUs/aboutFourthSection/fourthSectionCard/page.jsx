import React from 'react'
import Image from 'next/image'

const FourthSectionCard = (props) => {
  return (
    <div className='flex flex-col rounded-lg gap-4 items-center justify-center w-[280px] h-[150px] bg-opacity-20 border-[1px] border-white'>
        
        <Image
        src="/file2.png"
        width={50}
        height={150}
        alt="Picture of the author"
        className='text-white'
      />
      <h2 className='text-xl font-bold text-white'>{props.heading}</h2>
      
    </div>
  )
}

export default FourthSectionCard
