import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiComment, BiDotsHorizontalRounded } from 'react-icons/bi'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { useState } from 'react'
const ReelMenu = () => {

  const [liked, setLiked] = useState(false)

  return (
    <div>
      <div className='grid gap-5 justify-center items-center'>
        <div className='grid items-center justify-center'>
          <button className='flex justify-center'
            onClick={() => setLiked(!liked)}
          >
            {
              liked ? <AiFillHeart className="text-2xl text-red-500" /> :  
              <AiOutlineHeart className="text-2xl" />
            }
          </button>
          <p className='text-gray-400 text-sm'>3.0M</p>
        </div>
        <div className='grid items-center justify-center'>
          <button className='flex justify-center'>
            <BiComment className="text-2xl" />
          </button>
          <p className='text-gray-400 text-sm'>4,657</p>
        </div>
        <div className='flex justify-center items-center'>
          <button>
            <IoPaperPlaneOutline className="text-2xl" />
          </button>
        </div>
        <div className='flex justify-center items-center'>
          <button>
            <BsBookmark className="text-2xl" />
          </button>
        </div>
        <div className='flex justify-center items-center'>
          <button>
            <BiDotsHorizontalRounded className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReelMenu