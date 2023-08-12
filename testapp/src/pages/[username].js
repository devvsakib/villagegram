import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import MyStories from "../components/Profile/MyStories"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileLayout from "@/layouts/ProfileLayout"
import { useState } from "react"
import { BsBookmark, BsBookmarkFill, BsFillGrid3X3GapFill, BsTag, BsTagFill, BsGrid3X3GapFill, BsGrid3X3Gap } from "react-icons/bs"
import MyPost from "../components/MyProfile/MyPost"
import TaggedPost from "../components/MyProfile/TaggedPost"
import SavedPost from "../components/MyProfile/SavedPost"
import Head from "next/head"
import MainLayout from "@/layouts/MainLayout"
import { useRouter } from "next/router"

const Profile = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const tabsMenu = ["Posts", "Saved"]
    return (
        <MainLayout>
        <ProfileLayout>
            <Head><title>Profile</title></Head>
            <ProfileHeader />
            <MyStories />
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                    <TabList className={"flex justify-center gap-10"} >
                        <Tab className={`cursor-pointer outline-none border-t ${tabIndex === 0 ? "border-white text-white font-semibold" : "border-transparent"}`}>
                            <div className="uppercase text-secondary text-xs py-3 flex gap-2 items-center">
                                <div>
                                    {tabIndex === 0 ? <BsGrid3X3GapFill className="text-white" /> : <BsGrid3X3Gap />}
                                </div>
                                <p className={tabIndex == 0 && "text-white"}>
                                    Posts
                                </p>
                            </div>
                        </Tab>
                        <Tab className={`cursor-pointer outline-none border-t ${tabIndex === 1 ? "border-white text-white font-semibold" : "border-transparent"}`}>
                            <div className="uppercase text-secondary text-xs py-3 flex gap-2 items-center">
                                <div>
                                    {tabIndex === 1 ? <BsBookmarkFill className="text-white" /> : <BsBookmark />}
                                </div>
                                <p className={tabIndex == 1 && "text-white"}>
                                    Saved
                                </p>
                            </div>
                        </Tab>
                        <Tab className={`cursor-pointer outline-none border-t ${tabIndex === 2 ? "border-white text-white font-semibold" : "border-transparent"}`}>
                            <div className="uppercase text-secondary text-xs py-3 flex gap-2 items-center">
                                <div>
                                    {tabIndex === 2 ? <BsTagFill className="text-white" /> : <BsTag />}
                                </div>
                                <p className={tabIndex == 2 && "text-white"}>
                                    Tagged
                                </p>
                            </div>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <MyPost />
                    </TabPanel>
                    <TabPanel>
                        <SavedPost />
                    </TabPanel>
                    <TabPanel>
                        <TaggedPost />
                    </TabPanel>
                </Tabs>
            </div>
        </ProfileLayout>
        </MainLayout>
    )
}

export default Profile