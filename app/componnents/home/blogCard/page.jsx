import React from 'react'
import Image from 'next/image'
const BlogCard = (props) => {
  return (
    <div className={`flex flex-col py-3   ${props.isGrid ? "md:w-[550px]" : "md:w-[360px]"} w-full gap-4 `} >
    <Image
        src="/Man.jpg"
        width={360}
        height={300}
        alt="Picture of the author"
        className='w-full'
    />
        <h2 className="text-xl font-bold">The Nature is very Beautiful If we feel that </h2>
        <p>This is the image of the parrot having its tails in his beak and we see that as it is looking how cute </p>
    </div>
  )
}

export default BlogCard
