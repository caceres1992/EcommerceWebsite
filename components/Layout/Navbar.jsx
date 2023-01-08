import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { IoBagOutline } from 'react-icons/io5'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { ImMenu3, ImMenu4 } from 'react-icons/im'
import useCart from '../../hooks/useCart'
import DrawerCart from '../DrawerCart'
const Navbar = () => {

    const router = useRouter()
    const { cartList, CheckingValuesInLocalStorage } = useCart()
    const [activeMenu, setActiveMenu] = useState(false)
    const handleMenu = () => {
        setActiveMenu(!activeMenu)
        console.log("abriendo menu")
    }


    useEffect(() => {
        CheckingValuesInLocalStorage()
    }, [0])

    return (
        <div className='bg-white py-5 fixed w-full z-50'>
            <div className='mx-auto max-w-7xl flex justify-between items-center px-5 xl:px-0 relative'>
                <div className='flex items-center gap-x-3'>
                    <Link href={'/'}>
                        <p className='text-2xl font-extrabold tracking-[2px]'>BECOOL</p>
                    </Link>

                    {activeMenu ?
                        <ImMenu4 size={26} className='cursor-pointer lg:hidden' onClick={handleMenu} />
                        :
                        <ImMenu3 size={26} className='cursor-pointer lg:hidden' onClick={handleMenu} />
                    }

                </div>

                <div className={`absolute lg:relative top-12 lg:top-0  inset-0 h-0  z-30 overflow-hidden transition-all lg:h-auto ease-in-out ${activeMenu && 'lg:h-auto h-[calc(100vh-72px)] top-12 '} `}>

                    <ul className=' items-center gap-5 text-gray-600   flex lg:flex-row h-full lg:py-0 flex-col  py-10  bg-white w-full   lg:flex'>
                        <li onClick={handleMenu} className={`${router.pathname === "/" && " border-sky-600 border-b-2"}`}>
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li onClick={handleMenu} className={`${router.pathname === "/products" && " border-sky-600 border-b-2"}`}>
                            <Link href={"/products"}>Products</Link>
                        </li>
                        <li onClick={handleMenu}>About</li>
                        <li onClick={handleMenu} >Contact Us</li>
                    </ul>
                </div>

                <div className='flex items-center gap-x-5 '>
                    <Link href={'/login'}>
                        <div className='flex  items-center justify-center'>

                            <p className='text-xs p-0 mr-1'>Welcome, User</p>
                            <CiUser size={20} />

                        </div>
                    </Link>
                    <Link href='/mycart' className='relative' >
                        <IoBagOutline className='' size={20} />

                        {cartList.length > 0 && <div className='bg-rose-500 h-5 w-5 text-xs absolute -top-1.5 left-3
                        flex justify-center items-center text-white rounded-full'>
                            {cartList.length}
                        </div>}

                    </Link>
                </div>
            </div>
            <DrawerCart />
        </div>
    )
}

export default Navbar