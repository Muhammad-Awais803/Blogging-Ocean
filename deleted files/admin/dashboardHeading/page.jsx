import React from 'react'

const DashboardHeading = (props) => {
  return (
    <div>
      <h2 className="text-xl font-bold items-center justify-center ">
        {props.heading}
      </h2>
    </div>
  )
}

export default DashboardHeading
