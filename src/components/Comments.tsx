import Image from "next/image"


const Comments = () => {
    return (
        <div className="">
            {/* Write */}
            <div className=" flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/27298696/pexels-photo-27298696/free-photo-of-a-swan-is-standing-on-the-ice-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-8 h-8 rounded-full" width={32} height={32} />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder="write a comment..." className=" bg-transparent outline-none flex-1" />
                    <Image src="/emoji.png" alt="" className=" cursor-pointer" width={16} height={16} />
                </div>
            </div>
            {/* comments */}
            <div className="">
                {/* Comment */}
                <div className=" flex gap-4 justify-between mt-6">
                    {/* AVATAR */}
                    <Image src="https://images.pexels.com/photos/27298696/pexels-photo-27298696/free-photo-of-a-swan-is-standing-on-the-ice-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-10 h-10 rounded-full" width={40} height={40} />
                    {/* Description */}
                    <div className=" flex flex-col gap-2 flex-1">
                        <span className=" font-medium ">Bollie Appa</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit dolores atque aspernatur sapiente eum quis reiciendis mollitia quo nam placeat! Aliquid accusantium dicta aperiam facilis. Esse officiis velit iusto dolor?</p>
                        <div className=" flex items-center gap-8 text-xs  text-gray-500 mt-2">
                            <div className=" flex items-center gap-4 ">
                                <Image src="/like.png" alt="" width={12} height={12} className=" cursor-pointer w-3 h-3" />
                                <span className=" text-gray-300">|</span>
                                <span className=" text-gray-500">103 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image src="/more.png" alt="" width={16} height={16} className=" cursor-pointer w-4 h-4"></Image>
                </div>
            </div>
        </div>
    )
}

export default Comments