import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { IoBagOutline } from 'react-icons/io5'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
const Navbar = () => {
    const [isOpenCart, setIsOpenCart] = useState(false)
    const router = useRouter()

    return (
        <div className='bg-white py-5 fixed w-full z-50'>
            <div className='mx-auto max-w-7xl flex justify-between items-center px-5 lg:px-0 relative'>
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
                    <Link href={'/login'}>
                        <div className='flex  items-center justify-center'>

                            <p className='text-xs p-0 mr-1'>Welcome, User</p>
                            <CiUser size={20} />

                        </div>
                    </Link>
                    <Link href='/mycart'>
                        <IoBagOutline className='' size={20} />

                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar