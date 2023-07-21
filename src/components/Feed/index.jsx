import React from 'react'

const Feed = () => {
    const users = [
        {
            id: 1,
            img: "assets/jiso.jpg",
            name: "Jisoo",
            username: "sooyaaa__",
            followedBy: "Followed by _upayon_75",
            storyChecked: false
        },
        {
            id: 2,
            img: "assets/iu.jpg",
            name: "Jieun IU",
            username: "jieunni_iu",
            followedBy: "devvsakib + 1 more",
            storyChecked: true
        },
        {
            id: 3,
            img: "assets/leeminho.jpg",
            name: "Lee Min Ho",
            username: "actorleeminho",
            followedBy: "Suggested for you",
            storyChecked: false
        },
        {
            id: 3,
            img: "assets/francescociull4.jpg",
            name: "Francisco Ciulla",
            username: "francescociull4",
            followedBy: "Suggested for you",
            storyChecked: false
        }
    ]
    return (
        <div className='flex-1 mr-10 pl-5'>
            <div></div>
            {/* Story Area */}
            <div>
                <div>
                    <ul className='flex gap-6'>
                        {
                            users.map(user => (
                                <li key={user.id} className="mb-3">
                                    <button className="flex flex-col justify-center items-center gap-3">
                                        <div className={`w-16 flex justify-center rounded-full box-content p-[2px] ${!user?.storyChecked ? "storyBG" : ""}`}>
                                            <span className=' rounded-full overflow-hidden bg-white block'>
                                                <img className=" rounded-full p-[2px] bg-black" src={user.img} alt={user.name} />
                                            </span>
                                        </div>
                                        <div className="text-sm -mt-2">
                                            {/* if username length is grater than 10 */}
                                            <p className="text-primary">{user.username.length > 10 ? user.username.slice(0, 10) + "..." : user.username}</p>
                                        </div>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* Feed Area */}
            <div>
                Feed
            </div>
        </div>
    )
}

export default Feed