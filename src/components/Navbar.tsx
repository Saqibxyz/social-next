import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"


const Navbar = () => {
    return (
        <div className=" h-24 flex items-center justify-between">
            {/* left */}
            <div className=" md:hidden lg:block">
                <Link href="/" className="font-bold text-xl text-blue-600">MYSOCIAL</Link></div>
            {/* center */}
            <div className=" hidden md:flex ">
                {/* Links */}
                <div className=" flex gap-6 text-gray-600">

                    <Link href="/" className=" flex gap-2">
                        <Image src="/home.png" alt="Homepage logo" width={16} height={16} />
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className=" flex gap-2">
                        <Image src="/friends.png" alt="Friends" width={16} height={16} />
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className=" flex gap-2">
                        <Image src="/stories.png" alt="Stories" width={16} height={16} />
                        <span>Stories</span>
                    </Link>
                </div>
            </div>
            {/* right */}
            <div className="">
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar