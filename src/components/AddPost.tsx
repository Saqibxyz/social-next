import Image from 'next/image'
import React from 'react'

const AddPost = () => {
    return (
        <div className=" p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* Avatar */}
            <Image src="https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' className=' w-12 h-12 object-cover rounded-full' width={48} height={48} />
            {/* post  */}
            <div className="  flex-1">
                {/* Text input*/}
                <div className="flex gap-4">
                    <textarea name="" id="" placeholder="what's on your mind" className='flex-1 bg-slate-100 rounded-lg p-2'></textarea>
                    <Image src="/emoji.png" alt='' className=' w-5 h-5 cursor-pointer self-end' width={20} height={20} />
                </div>
                {/* Post options */}
                <div className=" flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className=" flex items-center gap-2 cursor-pointer ">
                        <Image src="/addImage.png" alt='' width={20} height={20} />
                        Photo
                    </div>
                    <div className=" flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png" alt='' width={20} height={20} />
                        Video
                    </div>
                    <div className=" flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" alt='' width={20} height={20} />
                        Poll
                    </div>
                    <div className=" flex items-center gap-2 cursor-pointer">
                        <Image src="/addEvent.png" alt='' width={20} height={20} />
                        Event
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddPost