import React, { useState } from 'react'
import CardProduct from './CardProduct'
import { TfiReload } from 'react-icons/tfi'
const OurProducts = ({ products, categories }) => {
    const [wordSelected, setWordSelected] = useState('all')
    const activeFilter = (value) => {
        setWordSelected(value)
        console.log(value)
    }

    return (
        <div className='mx-auto max-w-7xl py-24'>
            <h2 className='textTitle'>Our Products</h2>
            <p className='max-w-[600px] text-sm mx-auto text-gray-500 text-center py-5'>Lorem ipsum dolor , adipisicing elit. Odssimus vel provident dolorem, assumenda totam maiores. Optio, animi suscipit? Odit libero impedit tenetur possimus.</p>

            <div className='text-center text-sm md:text-base space-x-5 text-gray-700 font-semibold'>
                <button onClick={() => activeFilter('all')}
                    className={`  ${wordSelected == "all" && "border-b-2 border-sky-700"} `}>All</button>
                {categories?.map((category, idx) => <button onClick={() => activeFilter(category)}
                    key={idx} className={`capitalize ${wordSelected === category && 'border-b-2 border-sky-700'}`}>{category}</button>)}


            </div>

            <div className=' grid grid-cols-2   sm:grid-cols-3  xl:grid-cols-4 gap-5 w-full my-10'>

                {products?.filter(product => {
                    if (wordSelected === 'all') {
                        return product.category !== wordSelected
                    } else {
                        return product.category === wordSelected
                    }
                }).map(product => <CardProduct key={product?.id} product={product} />)}
            </div>


            {/* <button className='bg-sky-600 text-gray-50 py-3 px-10 shadow-sm rounded-xl hover:bg-sky-500 flex items-center mx-auto gap-x-3'>
                Load More <TfiReload />
            </button> */}
        </div>
    )
}

export default OurProducts