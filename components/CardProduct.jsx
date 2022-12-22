import React, { useEffect } from 'react'
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { MdAddShoppingCart } from 'react-icons/md'
const CardProduct = ({ product }) => {

    const handleRating = (value) => {

        const valueRate = Math.round(value)

        for (let index = 0; index < 6; index++) {
            if (index > valueRate) {
                return <AiFillStar color='orange' />
            } else {
                return <AiFillStar color='red' />
            }

        }
    }


    return (
        <div className='   rounded-lg overflow-hidden h-96 relative'>
            <AiOutlineHeart className=' absolute left-2 top-2 text-gray-900' size={20} />
            <img
                className=' h-64 w-full bg-white  object-contain p-4 object-center'
                src={product?.image} />

            <div className='p-3'>
                <div className='flex justify-between items-center '>
                    <div className='text-gray-800 font-semibold'>{product?.category} </div>
                    <div className='flex gap-x-0.5'>
                        {[...Array(5)].map((e, i) => {
                            i += 1;
                            if (Math.round(product?.rating?.rate) > i) {
                                return <AiFillStar key={product?.id} color='orange' />
                            } else {
                                return <AiOutlineStar key={product?.id} color='orange' />
                            }
                        })}

                    </div>
                </div>
                <p className=' text-sm text-gray-400  text-left line-clamp-1'>{product?.title}</p>

                <div className='flex  justify-between items-center pt-3'>
                    <p>$35.99</p>
                    <button onClick={() => console.log(product)}><MdAddShoppingCart size={20} className='text-gray-50 rounded-md h-7 p-1 w-7 bg-blue-500' /></button>
                </div>
            </div>

        </div>
    )
}

export default CardProduct