import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout = () => {
    return (
        <div id='mainLayout' className='flex'>
            <div>
                <Sidebar />
            </div>
            {/* will contain major component for main layout */}
            <div className='pr-10 pt-12 feedSize ml-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout