import { GiSoundOn, GiSoundOff } from 'react-icons/gi'
const ReelPlayer = () => {
  return (
    <div className='h-full bg-white/20 relative rounded-md overflow-hidden'>
      <div className="h-full flex items-end">
        <span className='absolute top-2 right-2'><GiSoundOn className="text-2xl" /></span>
        
        <div className="flex items-center absolute bottom-4 left-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img className='object-center object-cover' src="https://github.com/devvsakib.png" alt="user photo will be there" />
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Username</h4>
            <p className="text-sm text-gray-300">Sunset, very nice video I love that.</p>
          </div>
        </div>
        <div className='w-full h-full'>
          <img src="assets/reelTest.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ReelPlayer