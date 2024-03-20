import React from 'react'

const CardMainHeading = (props) => {
  return (
    <h2 className={`flex flex-col py-1 ${props.isGrid ? "items-center " : "  "} w-full text-xl font-black text-green  `}>{props.mainHeading}</h2>
  )
}

export default CardMainHeading
