import { AiOutlineHeart } from 'react-icons/ai'
import { BiComment, BiDotsHorizontalRounded } from 'react-icons/bi'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
const ReelMenu = () => {
  return (
    <div>
      <div className='grid gap-5'>
        <button>
          <AiOutlineHeart className="text-2xl" />
        </button>
        <button>
          <BiComment className="text-2xl" />
        </button>
        <button>
          <IoPaperPlaneOutline className="text-2xl" />
        </button>
        <button>
          <BsBookmark className="text-2xl" />
        </button>
        <button>
          <BiDotsHorizontalRounded className="text-2xl" />
        </button>
      </div>
    </div>
  )
}

export default ReelMenu