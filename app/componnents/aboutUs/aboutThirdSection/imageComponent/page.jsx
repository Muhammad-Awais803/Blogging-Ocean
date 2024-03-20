import React from 'react'
import Image from 'next/image'

const Imagecomponent = () => {
  return (
    <Image
    src="/Man.jpg"
    width={300}
    height={300}
    alt="Picture of the author"
    className="w-20 h-20  rounded-full absolute right-80"
  />
  )
}

export default Imagecomponent
