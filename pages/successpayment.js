import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import useCart from '../hooks/useCart'
const Successpayment = () => {

    const { removingAllProducts } = useCart()
    useEffect(() => {
        removingAllProducts()
    }, [0])
    return (
        <div className=' min-h-screen   flex justify-center items-center
        flex-col  '>
            <div className=' container space-y-5
               text-center '>
                <BsCartCheck size={36} className='  mx-auto text-amber-700' />
                <p className=' text-3xl font-bold uppercase text-gray-900'>Thank you for shopping</p>
                <Link href={"/products"}
                    className='bg-amber-700  
                mx-auto border
                 border-white/50 text-gray-50
                  block w-fit mt-10 py-2.5 md:py-4  
                  px-10  rounded-xl hover:bg-amber-800'>
                    Continue shopping!</Link>


            </div>
        </div>
    )
}

export default Successpayment