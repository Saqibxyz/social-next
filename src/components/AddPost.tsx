import Image from 'next/image'
import React from 'react'

const AddPost = () => {
    return (
        <div className=" p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
            {/* Avatar */}
            <Image src="https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' className=' w-12 h-12 object-cover rounded-full' width={48} height={48} />
            {/* post  */}
            <div className="">
                {/* Text input*/}
                <div className="flex gap-4n">
                    <textarea name="" id="" placeholder="what's on your mind" className=' bg-slate-100 rounded-lg'></textarea>
                    <Image src="/emoji.png" alt='' className=' w-5 h-5 cursor-pointer self-end' width={20} height={20} />
                </div>
                {/* Post options */}
                <div className=""></div>
            </div>

        </div>
    )
}

export default AddPost