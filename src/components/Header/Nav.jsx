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
        <nav className='grid gap-5 justify-start'>

            {
                menuItems.map((item, index) => (
                    item.link ?
                        <Link className='flex gap-2 items-center' path={item.link} key={index}>{item.icon}{item.title}</Link>
                        :
                        <button className='flex gap-2 items-center text-left' key={index}>{item?.icon}{item.title}</button>

                ))
            }
        </nav>
    )
}

export default Nav