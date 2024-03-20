import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SideBarCard = (props) => {
  return (
    <div className='flex  items-center gap-2 w-48 py-2 pl-2 pr-4 rounded-2xl '>
       <Image
        src={props.src}
        width={20}
        height={30}
        alt='the image is related to the apps'
        className='text-white'
      />
      <Link href={props.link} className='flex justify-center items-center text-md '>{props.heading}</Link>
    </div>
  )
}

export default SideBarCard
