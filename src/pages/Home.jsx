import Feed from "../components/Feed"
import RightSidebar from "../components/Sidebar/RightSidebar"

const Home = () => {
    return (
        <div className="flex min-h-screen gap-10 pl-10">
            <Feed />
            <RightSidebar />
        </div>
    )
}

export default Home