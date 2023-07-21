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
                {/* article measurement */}
                {/* 
                    max-width: 470px; - sm 
                    max-height: 815px; - md / 793px - sm
                    padding: 0 0 20px 0; - lg
                    border: 0 0 1px 0; - lg
                    margin: 0 0 12px 0; - lg
                */}
            </div>
        </div>
    )
}

export default Feed