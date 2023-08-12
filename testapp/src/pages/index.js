import MainLayout from '@/layouts/MainLayout'
import RightSidebar from '@/components/Sidebar/RightSidebar'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <MainLayout>
      <div className="flex min-h-screen gap-10 pl-10 mt-8">
        <Feed />
        <RightSidebar />
      </div>
    </MainLayout>
  )
}
