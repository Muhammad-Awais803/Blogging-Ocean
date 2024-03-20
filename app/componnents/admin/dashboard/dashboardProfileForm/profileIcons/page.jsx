import React from 'react'
import Image from 'next/image'

const ProfileIcons = (props) => {
  return (
    <div className='flex items-center justify-center rounded-full p-2 bg-zinc-300 '>
        <Image
            src={props.src}
            width={20}
            height={150}
            alt="Picture of the author"
            className="text-white"
          />
    
    </div>
  )
}

export default ProfileIcons
