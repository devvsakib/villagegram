import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { MdExplore } from 'react-icons/md'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle } from 'react-icons/ai'
import { TfiVideoClapper } from 'react-icons/tfi'
import { RiMessengerLine, RiMessengerFill } from 'react-icons/ri'

const Nav = () => {
    const menuItems = [
        { icon: <GoHome />, activeIcon: <GoHomeFill />, title: 'Home', link: '/' },
        { icon: <BiSearchAlt2 />, activeIcon: <FaSearch />, title: 'Search' },
        { icon: <MdExplore />, activeIcon: <MdExplore />, title: 'Explore', link: '/explore' },
        { icon: <TfiVideoClapper />, activeIcon: <TfiVideoClapper />, title: 'Reels', link: '/reels' },
        { icon: <RiMessengerLine />, activeIcon: <RiMessengerFill />, title: 'Messages', link: '/messages' },
        { icon: <AiOutlineHeart />, activeIcon: <AiFillHeart />, title: 'Notifications' },
        { icon: <AiOutlinePlusCircle />, activeIcon: <AiOutlinePlusCircle />, title: 'Create' }
    ]
    return (
        <nav className='flex flex-col gap-4 justify-start text-base'>

            {
                menuItems.map((item, index) => (
                    item.link ?
                        <Link className='flex gap-3 items-center text-left rounded-lg px-2 py-2 font-medium hover:bg-slate-100/10 group' to={item.link} key={index}>
                            <span className='sidebarIcon'>
                                {item.icon}
                            </span>
                            {item.title}
                        </Link>
                        :
                        <button className='flex gap-3 items-center text-left rounded-lg px-2 py-2 font-medium hover:bg-slate-100/10 group' key={index}>
                            <span className='sidebarIcon'>
                                {item?.icon}
                            </span>
                            {item.title}</button>

                ))
            }
            <Link to={"/dynamic-username"} className='flex gap-3  items-center text-left rounded-lg px-2 py-2 font-medium hover:bg-slate-100/10 group group'>
                <span className='sidebarIco'>
                    <img class="h-5 w-5 ml-1 rounded-full ring-2 ring-white" src="https://github.com/devvsakib.png" alt="devvsakib" />
                </span>
                Profile

            </Link>
        </nav>
    )
}

export default Nav