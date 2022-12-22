import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CiUser } from 'react-icons/ci'
import { IoBagOutline } from 'react-icons/io5'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
const Navbar = () => {

    const router = useRouter()

    return (
        <div className='bg-white py-5'>
            <div className='mx-auto max-w-7xl flex justify-between items-center px-5 lg:px:0'>
                <div className='flex items-center gap-x-3'>
                    <p className='text-2xl font-extrabold tracking-[2px]'>BECOOL</p>
                    <AiOutlineMenuUnfold size={26} className='cursor-pointer lg:hidden' />
                </div>

                <div>

                    <ul className=' items-center gap-5 text-gray-600 hidden lg:flex'>
                        <li className={`${router.pathname === "/" && " border-sky-600 border-b-2"}`}>
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li className={`${router.pathname === "/products" && " border-sky-600 border-b-2"}`}>
                            <Link href={"/products"}>Products</Link>
                        </li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className='flex items-center gap-x-5 '>
                    <div className='flex  items-center justify-center'>
                        <p className='text-xs p-0 mr-1'>Welcome, User</p>
                        <CiUser size={20} />
                    </div>
                    <IoBagOutline className='' size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar