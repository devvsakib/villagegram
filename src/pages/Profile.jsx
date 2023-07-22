import MyStories from "../components/Profile/MyStories"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileLayout from "../layouts/ProfileLayout"

const Profile = () => {
    return (
        <ProfileLayout>
            <ProfileHeader />
            <MyStories />
        </ProfileLayout>
    )
}

export default Profile