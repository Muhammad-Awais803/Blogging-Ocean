import Users from '@/app/admin/users/page'
import DashboardProfileForm from '@/deleted files/admin/dashboard/dashboardProfileForm/page'
import DashboardSideBar from '@/deleted files/admin/dashboard/dashboardSideBar/page'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='flex'>
          <DashboardSideBar/>
          <Users/>
          <DashboardProfileForm/>
        </div>
      )
}

export default Dashboard
