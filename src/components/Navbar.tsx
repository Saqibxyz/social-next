"use client"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"


const Navbar = () => {
    return (
        <div className=" h-24 flex items-center justify-between">
            {/* left */}
            <div className=" md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-xl text-blue-600">MYSOCIAL</Link></div>
            {/* center */}
            <div className="hidden md:flex w-[50%] text-sm items-center justify-between">

                {/* Links */}
                <div className=" flex gap-6 text-gray-600">

                    <Link href="/" className=" flex gap-2 items-center">
                        <Image src="/home.png" alt="Homepage logo" width={16} height={16} className=" w-4 h-4 " />
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className=" flex gap-2 items-center">
                        <Image src="/friends.png" alt="Friends" width={16} height={16} className=" w-4 h-4 " />
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className=" flex gap-2 items-center">
                        <Image src="/stories.png" alt="Stories" width={16} height={16} className=" w-4 h-4 " />
                        <span>Stories</span>
                    </Link>
                </div>
                <div className=" hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                    <input type="text" placeholder="search..." className="bg-transparent outline-none" />
                    <Image src="/search.png" alt="" width={14} height={14} />
                </div>
            </div>
            {/* right */}
            <div className=" w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <ClerkLoading>
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                        role="status">

                    </div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image src="/people.png" alt="" height={24} width={24} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/messages.png" alt="" height={20} width={20} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/notifications.png" alt="" height={20} width={20} />
                        </div>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className=" flex items-center gap-2 text-sm">

                            <Image src="/login.png" alt="" height={18} width={18} />
                            <Link href="/sign-in">Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar