import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import MyStories from "../components/Profile/MyStories"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileLayout from "../layouts/ProfileLayout"
import { useState } from "react"
import { BsBookmark, BsBookmarkFill, BsFillGrid3X3GapFill, BsTag, BsTagFill, BsGrid3X3GapFill, BsGrid3X3Gap } from "react-icons/bs"

const Profile = () => {
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);
    return (
        <ProfileLayout>
            <ProfileHeader />
            <MyStories />
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                    <TabList className={"flex justify-center gap-10"} >
                        <Tab className={`cursor-pointer border-t ${tabIndex === 0 ? "border-white text-white font-semibold" : "border-transparent"}`}>
                            <div className="uppercase text-secondary text-xs py-3 flex gap-2 items-center">
                                <div>
                                    {tabIndex === 0 ? <BsGrid3X3GapFill className="text-white" /> : <BsGrid3X3Gap />}
                                </div>
                                <p className={tabIndex == 0 && "text-white"}>
                                    Posts
                                </p>
                            </div>
                        </Tab>
                        <Tab className={`cursor-pointer border-t ${tabIndex === 1 ? "border-white text-white font-semibold" : "border-transparent"}`}>
                            <div className="uppercase text-secondary text-xs py-3 flex gap-2 items-center">
                                <div>
                                    {tabIndex === 1 ? <BsBookmarkFill className="text-white" /> : <BsBookmark />}
                                </div>
                                <p className={tabIndex == 1 && "text-white"}>
                                    Saved
                                </p>
                            </div>
                        </Tab>
                        <Tab className={`cursor-pointer border-t ${tabIndex === 2 ? "border-white text-white font-semibold" : "border-transparent"}`}>
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
                        <p>
                            1
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            2
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            3
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        </ProfileLayout>
    )
}

export default Profile