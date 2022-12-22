import React from 'react'
import CardProduct from './CardProduct'
import { TfiReload } from 'react-icons/tfi'
const OurProducts = ({ products }) => {
    return (
        <div className='mx-auto max-w-7xl py-10'>
            <h2 className='textTitle'>Our Products</h2>
            <p className='w-[600px] text-sm mx-auto text-gray-500 text-center py-5'>Lorem ipsum dolor , adipisicing elit. Odssimus vel provident dolorem, assumenda totam maiores. Optio, animi suscipit? Odit libero impedit tenetur possimus.</p>

            <div className='text-center space-x-5 text-gray-700 font-semibold'>
                <button className='border-b-2 border-sky-700'>HOT</button>
                <button>ON SALE</button>
                <button>TRENDING NOW</button>
                <button>NEW ARRIVAL</button>
            </div>

            <div className=' grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full my-10'>
                {products?.map(product => <CardProduct   key={product?.id} product={product} />)}
            </div>


            <button className='bg-sky-600 text-gray-50 py-3 px-10 shadow-sm rounded-xl hover:bg-sky-500 flex items-center mx-auto gap-x-3'>
                Load More <TfiReload />
            </button>
        </div>
    )
}

export default OurProducts