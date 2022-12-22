import React from 'react'
import CardProduct from './CardProduct'
import { BiRightArrowAlt } from 'react-icons/bi'
import Link from 'next/link'




const NewWinterCollection = ({ products }) => {
    return (
        <div className=' max-w-7xl mx-auto py-10 px-5 text-center'>
            <h2 className=' textTitle'>New Winter Collection</h2>
            <p className='w-[500px] text-center mx-auto mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque, ducimus facere incidunt, commodi fugiat.l</p>

            <div className=' grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full my-10'>
                {products?.slice(0, 4).map(product => <CardProduct key={product?.id} product={product} />)}
            </div>
            <Link href={"/products"} className=' px-10 py-2  w-fit rounded-md text-gray-900 flex items-center mx-auto gap-x-1 hover:text-orange-400 transition-all '>View more <BiRightArrowAlt size={20} /></Link>
        </div>
    )
}

export default NewWinterCollection