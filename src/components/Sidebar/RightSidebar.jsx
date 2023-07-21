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
        </div>
    )
}

export default RightSidebar