import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="bg-green w-fit p-2 text-white text-xs font-medium rounded-lg">{props.title}</button>
    </div>
  )
}

export default Button
