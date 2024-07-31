import Image from 'next/image'
import React from 'react'

const Post = () => {
    return (
        <div className=' flex flex-col gap-4 '>
            {/* User div */}
            <div className=" flex items-center justify-between">
                <div className=" flex items-center gap-4 ">
                    <Image src="https://images.pexels.com/photos/27430540/pexels-photo-27430540/free-photo-of-blue-eyes-with-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-10 h-10 rounded-full '
                        height={40} width={40} />
                    <span className=' font-medium'>M Ayat</span>
                </div>
                <Image src="/more.png" alt=""
                    height={16} width={16} />
            </div>
            {/* Description */}
            <div className=" flex flex-col gap-4">
                <div className=" w-full min-h-96 relative ">
                    <Image src="https://images.pexels.com/photos/27402207/pexels-photo-27402207/free-photo-of-jagat-siromani-temple.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""
                        fill className=' object-cover rounded-md' />
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla neque quas nam et vitae, placeat ratione, officiis, expedita fugiat eos quidem? Quo, harum hic beatae quos magni sapiente deserunt ipsum!
                </p>
            </div>
        
            {/* Interaction*/}
            <div className=" flex items-center justify-between text-sm my-4">
                <div className=" flex gap-8">
                    <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
                        <Image src="/like.png" alt=""
                            height={16} width={16} className=' cursor-pointer ' />
                        <span className=' text-gray-300'>|</span>
                        <span className=' text-gray-500'>123<span className=' hidden md:inline'> Likes</span></span>

                    </div>
                    <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
                        <Image src="/comment.png" alt=""
                            height={16} width={16} className=' cursor-pointer ' />
                        <span className=' text-gray-300'>|</span>
                        <span className=' text-gray-500'>123<span className=' hidden md:inline'> Comments</span></span>

                    </div>
                </div>
                <div className="">
                    <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
                        <Image src="/share.png" alt=""
                            height={16} width={16} className=' cursor-pointer ' />
                        <span className=' text-gray-300'>|</span>
                        <span className=' text-gray-500'>123<span className=' hidden md:inline'> Shares</span></span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post