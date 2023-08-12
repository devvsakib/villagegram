import { useState } from "react"
import { BsDot } from 'react-icons/bs'
const Articles = () => {
    const [comment, setComment] = useState('')
    return (
        <article className="mt-4 max-w-lg ml-auto h-[470px] sm:min-h-[793px] md:min-h-[815px] pb-5 mb-3 border-b border-[#262626]">
            {/* header */}
            <div className="flex items-center justify-between text-sm  py-3">
                <div className="flex items-center gap-1">
                    <img className="w-8 h-8 object-cover rounded-full mr-3" src="https://github.com/devvsakib.png" alt="profile" />
                    <div className="flex flex-col">
                        <p className="font-semibold">devvsakib</p>
                        {/* location render conditionaly */}
                        {/* <p className="text-xs text-secondary">location</p> */}
                    </div>
                    <BsDot className="font-semibold text-lg text-secondary" />
                    <div>
                        <span className="text-secondary">
                            10h
                        </span>
                        {/* 2w/2m/2y */}
                    </div>
                    <BsDot className="font-semibold text-lg text-secondary" />
                    <div>
                        <button className="text-blue-500 font-semibold ">Follow</button>
                    </div>
                </div>
                <button>
                    <svg aria-label="More options" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="16" role="img" viewBox="0 0 48 48" width="16"><title>More options</title><circle cx="8" cy="24" r="4.5"></circle><circle cx="24" cy="24" r="4.5"></circle><circle cx="40" cy="24" r="4.5"></circle></svg>
                </button>
            </div>
            {/* image/video */}
            <div className="w-full h-[585px] rounded-md mb-3 overflow-hidden">
                <img className="object-cover object-center w-full" src="assets/lemon.jpg" alt="post" />
            </div>

            {/* action buttons */}
            <div className="grid">
                <div className="flex gap-4 pb-2">
                    {/* likes */}
                    <svg aria-label="Like" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>

                    {/* comments */}
                    <svg aria-label="Comment" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                    {/* share */}
                    <svg aria-label="Share Post" class="x1lliihq x1n2onr6" color="white" fill="rgb(168, 168, 168)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
                <div className="text-sm">
                    {/* liked by */}
                    <p className="font-semibold mb-[5px]"><span>3,619,272</span> likes</p>
                    <p className="mb-[5px]"><span className="font-semibold">devvsakib</span> villagegram</p>
                    <p className="text-secondary mb-[5px]">View all <span>28,542</span> comments</p>
                    <p className="mb-[6px]"><span className="font-semibold">maria_costa.7923</span> ❏ 1 O mais lindo ❤️</p>
                    <div className="flex gap-2">
                        <textarea className="placeholder:opacity-50 placeholder:text-secondar bg-transparent h-5 focus:outline-none resize-none w-full" type="text" placeholder="Add a comment..." onChange={(e) => setComment(e.target.value)} ></textarea>
                        {
                            comment && <div>
                                <button className="font-semibold text-blue-500">Post</button>
                            </div>
                        }
                        {/* add emoji */}
                        <button>
                            <svg aria-label="Emoji" class="x1lliihq x1n2onr6" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="13" role="img" viewBox="0 0 24 24" width="13"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Articles