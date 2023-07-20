import Nav from "../Header/Nav"
import MoreOptions from "./MoreOptions"

const Sidebar = () => {
  return (
    <div className="border-r w-[260px] flex flex-col justify-between p-3">
      <div className="grid gap-5">
        <div className="px-2 mt-2">
          <img src="assets/Villagegram.svg" alt="" srcset="" />
        </div>
        <Nav />
      </div>
      <div className="px-2 mb-3">
        <MoreOptions />
      </div>
    </div>
  )
}

export default Sidebar