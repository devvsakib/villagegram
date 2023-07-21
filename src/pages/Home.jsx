import { useEffect, useState } from "react"
import LoadingScreen from "../components/Common/LoadingScreen"
import Feed from "../components/Feed"
import RightSidebar from "../components/Sidebar/RightSidebar"

const Home = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // setTimeout(() => setLoading(false), 2300)
    }, [])
    return (
        <div className="flex min-h-screen gap-10 pl-10">
            {!loading ? <LoadingScreen /> : <>
                <Feed />
                <RightSidebar />
            </>
            }
        </div>
    )
}

export default Home