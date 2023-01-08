import Link from 'next/link'
import React, { useEffect } from 'react'
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { MdAddShoppingCart } from 'react-icons/md'
import useCart from '../hooks/useCart'
const CardProduct = ({ product }) => {

    const { setQuantity } = useCart()


    return (
        <div className='   rounded-lg overflow-hidden  relative'>
            <AiOutlineHeart className=' absolute left-5 top-5 text-gray-900 z-10' size={20} />
            <div className=' h-44  w-full md:h-64 p-3'>

                <img
                    onClick={() => console.log(product)}
                    className=' h-full w-full hover:scale-110 transition-all ease-in-out bg-white  object-contain p-4 object-center'
                    src={product?.image} />
            </div>

            <div className='p-3'>
                <div className='flex justify-between items-center '>
                    <div className='text-gray-800 font-semibold text-sm md:text-base capitalize'>{product?.category} </div>
                    <div className='flex gap-x-0.5 text-xs md:text-base'>
                        {[...Array(5)].map((e, i) => {
                            i += 1;
                            if (Math.round(product?.rating?.rate) > i) {
                                return <AiFillStar key={i} color='orange' />
                            } else {
                                return <AiOutlineStar key={i} color='orange' />
                            }
                        })}

                    </div>
                </div>
                <p className=' text-xs md:text-sm text-gray-400  text-left line-clamp-1 md:linecl'>{product?.title}</p>

                <div className='flex  justify-between items-center pt-3'>
                    <p>${product?.price}</p>
                    <Link href={`/product/${product?.id}`} onClick={() => setQuantity(1)} ><MdAddShoppingCart size={20} className='text-gray-50 rounded-md h-7 p-1 w-7 bg-blue-500' /></Link>
                </div>
            </div>

        </div>
    )
}

export default CardProduct