import DashboardFirstForm from '@/app/componnents/admin/dashboard/dashboardFirstForm/page'
import DashboardProfileForm from '@/app/componnents/admin/dashboard/dashboardProfileForm/page'
import DashboardSideBar from '@/app/componnents/admin/dashboard/dashboardSideBar/page'
import React from 'react'
import Users from '../users/page'

const DashBoard = () => {
  return (
    <div className='flex'>
      <DashboardSideBar/>
      <Users/>
      <DashboardProfileForm/>
    </div>
  )
}

export default DashBoard
