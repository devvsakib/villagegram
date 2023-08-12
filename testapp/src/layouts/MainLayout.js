import LoadingScreen from "@/components/Common/LoadingScreen"
import Maintaince from "@/components/Maintaince"
import Sidebar from "@/components/Sidebar/Sidebar"
import useWindowSize from "@/hooks/useWindowSize"
import { useEffect, useState } from "react"


const MainLayout = ({children}) => {
    const windowSize = useWindowSize()
    const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     document.body.style.overflow = 'hidden'
    //     setTimeout(() => {
    //         setLoading(false)
    //         document.body.style.overflow = 'auto'
    //     }, 2300)
    // }, [])
    return (
        <div id='mainLayout' className='flex'>
            {
                !loading && <div className='fixed top-0 left-0 w-screen h-screen bg-black z-50 flex justify-center items-center'>
                    <LoadingScreen />
                </div>
            }
            {
                windowSize.width < 1200 ?
                    <Maintaince />
                    :
                    <>
                        <div>
                            <Sidebar />
                        </div>
                        {/* will contain major component for main layout */}
                        <div className='pr-10 pt-12 feedSize ml-auto'>
                          {children}
                        </div>
                    </>
            }
        </div>
    )
}

export default MainLayout