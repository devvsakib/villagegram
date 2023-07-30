const PostCard = ({imgPath}) => {
    return (
        <div>
            <div></div>
            <div className="h-72 overflow-hidden">
                <img className="object-bottom" src={`assets/${imgPath}`} alt="" srcset="" />
            </div>
        </div>
    )
}

export default PostCard