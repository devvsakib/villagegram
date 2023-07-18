import Nav from "../Header/Nav"
import MoreOptions from "./MoreOptions"

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <img src="assets/Villagegram.svg" alt="" srcset="" />
      </div>
      <Nav />
      <MoreOptions />
    </div>
  )
}

export default Sidebar