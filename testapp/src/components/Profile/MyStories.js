const MyStories = () => {
  const users = [
    {
      id: 1,
      img: "assets/jiso.jpg",
      name: "Jisoo",
      username: "Hacktoberfest",
      followedBy: "Followed by _upayon_75",
      storyChecked: false
    },
    {
      id: 2,
      img: "assets/iu.jpg",
      name: "Jieun IU",
      username: "Programme",
      followedBy: "devvsakib + 1 more",
      storyChecked: true
    },
    {
      id: 3,
      img: "assets/leeminho.jpg",
      name: "Lee Min Ho",
      username: "MemeNeverExit",
      followedBy: "Suggested for you",
      storyChecked: false
    },
    {
      id: 3,
      img: "assets/francescociull4.jpg",
      name: "Francisco Ciulla",
      username: "DR2",
      followedBy: "Suggested for you",
      storyChecked: false
    }
  ]
  return (
    <div className="mb-10">
      <div>
        <ul className='flex gap-6'>
          {
            users.map(user => (
              <li key={user.id} className="mb-3">
                <button className="flex flex-col justify-center items-center gap-3">
                  <div className={`w-20 flex justify-center rounded-full box-content p-[2px]`}>
                    <span className='rounded-full overflow-hidden bg-white block'>
                      <img className="rounded-full p-[2px] bg-black" src={user.img} alt={user.name} />
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
          <li>
            <button>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="w-[75px] h-[75px] items-center flex justify-center rounded-full box-content p-[2px] border-2 border-primary">
                  <span className='rounded-full overflow-hidden block'>
                    <svg aria-label="Plus icon" class="x1lliihq x1n2onr6" color="transparent" fill="rgb(115, 115, 115)" height="40" role="img" viewBox="0 0 24 24" width="44"><title>Plus icon</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
                  </span>
                </div>
                <div className="text-sm -mt-2">
                  <p className="text-primary">New</p>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MyStories