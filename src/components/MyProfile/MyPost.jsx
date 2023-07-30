import PostCard from "../Post/PostCard"

const MyPost = () => {
  const ar = [0, 1, 2, 3]
  const imgPath = "devvsakib.jpg"
  return (
    <div className="grid grid-cols-3 gap-1 mt-1">
      {
        ar.map(el =>
          <PostCard imgPath={imgPath} />
        )
      }
    </div>
  )
}

export default MyPost