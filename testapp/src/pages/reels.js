import ReelMenu from '@/components/Reels/ReelMenu';
import ReelPlayer from '@/components/Reels/ReelPlayer';
import MainLayout from '@/layouts/MainLayout';

const Reels = () => {
    return (
        <MainLayout>
            <div className="mt-10">
                <div className="relative flex justify-center items-end gap-3 w-[400px] mx-auto h-[90vh]">
                    <ReelPlayer />
                    <ReelMenu />
                </div>
            </div>
        </MainLayout>
    )
}

export default Reels