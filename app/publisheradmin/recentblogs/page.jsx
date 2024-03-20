import React from 'react'
import Image from 'next/image'

const RecentBlogs = () => {
  return (
    <div className="flex gap-5">
              <Image
                src="/ai.jpg"
                width={100}
                height={50}
                alt="Picture of the author"
                className="rounded-lg "
              />
              <div className="flex flex-col gap-3">
                <h2 className="text-lg text-zinc-500 font-semibold">
                  Setting Intention Instead of Resolutions
                </h2>
                <div className="flex gap-8">
                  <div className="flex gap-2">
                    <Image
                      src="/comments.png"
                      width={20}
                      height={15}
                      alt="Picture of the author"
                      className=" "
                    />
                    <p className="text-base text-zinc-500">321 Comments</p>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      src="/views.png"
                      width={20}
                      height={15}
                      alt="Picture of the author"
                      className=" "
                    />
                    <p className="text-base text-zinc-500">321 likes</p>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      src="/edit.png"
                      width={20}
                      height={15}
                      alt="Picture of the author"
                      className=" "
                    />
                    <p className="text-base text-zinc-500">Edit</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default RecentBlogs
