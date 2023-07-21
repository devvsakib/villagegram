import { Link } from "react-router-dom"

const RightSidebar = () => {
    const users = [
        {
            id: 1,
            img: "assets/jiso.jpg",
            name: "Jisoo",
            username: "sooyaaa__",
            followedBy: "Followed by _upayon_75"
        },
        {
            id: 2,
            img: "assets/iu.jpg",
            name: "Jieun IU",
            username: "jieunni_iu",
            followedBy: "devvsakib + 1 more"
        },
        {
            id: 3,
            img: "assets/leeminho.jpg",
            name: "Lee Min Ho",
            username: "actorleeminho",
            followedBy: "Suggested for you"
        },
        {
            id: 3,
            img: "assets/francescociull4.jpg",
            name: "Francisco Ciulla",
            username: "francescociull4",
            followedBy: "Suggested for you"
        }
    ]
    const footerMenu = [
        { name: "About", link: "/about" },
        { name: "Help", link: "/help" },
        { name: "Press", link: "/press" },
        { name: "API", link: "/api" },
        { name: "Jobs", link: "/jobs" },
        { name: "Privacy", link: "/privacy" },
        { name: "Terms", link: "/terms" },
        { name: "Locations", link: "/locations" },
        { name: "Language", link: "/language" }
    ]
    return (
        <div className="p-2 w-[340px] text-primary text-sm">
            {/*  my profile */}
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <img className="h-14 w-14 ml-1 rounded-full " src="https://github.com/devvsakib.png" alt="devvsakib" />
                    </div>
                    <div className="text-sm">
                        <h4 className="font-semibold -mb-1">devvsakib</h4>
                        <p className="text-secondary">Xavon Sakib</p>
                    </div>
                </div>
                <div>
                    <button className="text-[12px] text-blue-400">Switch</button>
                </div>
            </div>
            {/* suggested for user */}
            <div className="grid gap-3">
                <div className="flex justify-between">
                    <p className="text-secondary font-semibold">Suggested for you</p>
                    <button>See All</button>
                </div>
                <div className="grid gap-4">
                    {
                        users.map(user => (
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <img className="h-8 w-8 ml-1 rounded-full" src={user.img} />
                                    </div>
                                    <div className="text-sm">
                                        <h4 className="font-semibold -mb-1">{user.username}</h4>
                                        <p className="text-secondary text-xs">{user.followedBy}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="text-[12px] text-blue-400">Follow</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Footer */}
            <div className="text-tertiary text-xs mt-6" >
                <div className="mb-4">
                    <ul className="flex flex-wrap gap-1">
                        {
                            footerMenu.map(menu => (
                                <li className="flex">
                                    <Link to={menu.link} className="mr-3">
                                        <span>
                                            {menu.name}
                                        </span>
                                    </Link>
                                    <span className="-ml-2">.</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <p className="uppercase">© 2023 Instagram from Meta</p>
            </div>
        </div>
    )
}

export default RightSidebar