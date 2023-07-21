import { useEffect, useState } from "react"
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import LoadingScreen from '../components/common/LoadingScreen'

const MainLayout = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2300)
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }

    }, [])
    return (
        <div id='mainLayout' className='flex'>
            {
                loading && <div className='fixed top-0 left-0 w-screen h-screen bg-black z-50 flex justify-center items-center'>
                    <LoadingScreen />
                </div>
            }
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