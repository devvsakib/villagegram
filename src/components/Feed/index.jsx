import React from 'react'
import StoryArea from './StoryArea'

const Feed = () => {

    return (
        <div className='flex-1 mr-10 pl-5'>
            <div></div>
            {/* Story Area */}
            <div>
                <StoryArea />
            </div>
            {/* Feed Area */}
            <div>
                Feed
            </div>
        </div>
    )
}

export default Feed