import ReelPlayer from "../components/Reels/ReelPlayer"
import ReelMenu from "../components/Reels/ReelMenu"

const Reel = () => {
    return (
        <div className="-mt-5">
            <div className="relative flex justify-center items-end gap-3 w-[400px] mx-auto h-[90vh]">
                <ReelPlayer />
                <ReelMenu />
            </div>
        </div>
    )
}

export default Reel