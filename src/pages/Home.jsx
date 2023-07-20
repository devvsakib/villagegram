import Feed from "../components/Feed"
import RightSidebar from "../components/Sidebar/RightSidebar"
import Sidebar from "../components/Sidebar/Sidebar"

const Home = () => {
    return (
        <div className="flex min-h-screen gap-10">
            <Sidebar />
            <Feed />
            <RightSidebar />
        </div>
    )
}

export default Home