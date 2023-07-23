import { MdSettings } from "react-icons/md"

const ProfileHeader = () => {
  return (
    <header className="flex gap-24">
      <div className="">
        <div className="mr-3xl">
          <div className="w-36 h-36 rounded-full overflow-hidden">
            <img className="object-cover object-top w-full h-full" src="assets/devvsakib.jpg" alt="profile" />
          </div>
        </div>
      </div>
      <section className="grid gap-4">
        <div className="flex gap-5 items-center justify-between max-w-lg">
          <div>
            <p className="text-base font-semibold">devvsakib</p>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex text-sm gap-2">
              <button className="bg-primary/20 text-white px-4 py-2 rounded-md">Edit Profile</button>
              <button className="bg-primary/20 text-white px-4 py-2 rounded-md">View Archive</button>
            </div>
            <div>
              <div>
                <MdSettings className="text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <p className=""><span className="font-semibold">57</span> posts</p>
          </div>
          <div>
            <p className=""><span className="font-semibold">207</span> followers</p>
          </div>
          <div>
            <p className=""><span className="font-semibold">23</span> following</p>
          </div>
        </div>
        <div className="max-w-lg">
          <div>
            <p className="font-semibold text-sm">Xavon Sakib</p>
          </div>
          {/* bio */}
          <div>
            <pre className="text-sm">Full-stack Developer Engineer | WordPress Expert | #devvsakib GITHUB #FB-Xavon Sakib</pre>
          </div>
        </div>
      </section>
    </header>
  )
}

export default ProfileHeader