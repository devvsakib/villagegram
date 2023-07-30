const TaggedPost = () => {
  const ar = [0, 1, 2, 3]
  const imgPath = "devvsakib.jpg"
  return (
    <div className="grid grid-cols-3 gap-1 mt-1">
      {
        ar.map(el =>
          <div>
            <div></div>
            <div className="h-72 overflow-hidden">
              <img className="object-bottom" src={`assets/${imgPath}`} alt="" srcset="" />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default TaggedPost