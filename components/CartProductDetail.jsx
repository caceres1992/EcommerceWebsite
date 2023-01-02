import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import useCart from '../hooks/useCart'

const CartProductDetail = ({ item }) => {
    const { ascProductQA, descProductQA, removeItem } = useCart()
    return (
        <div className='flex gap-x-4 justify-between'>
            <div className='w-[80px] h-[80px]'>
                <img
                    height={80} width={80} className="bg-white p- w-full h-full object-contain p-2 rounded-md"
                    src={item.product.image} />
            </div>

            <div className='text-gray-700 flex-1 capitalize font-medium flex flex-col justify-between'>

                <p className='text-sm line-clamp-2 text-gray-500'>{item.product.title}</p>
                <div className='border w-fit text-center flex items-center rounded-sm'>
                    <button onClick={() => descProductQA(item)}
                        className='flex-1 py-2 px-2 '>
                        <AiOutlineMinus size={14} />
                    </button>
                    <span className='p-1  w-8 text-xs'>{item.quantity}</span>
                    <button onClick={() => ascProductQA(item)}
                        className='flex-1 py-1 px-2' >
                        <AiOutlinePlus size={14} />
                    </button>
                </div>
            </div>

            <div className='flex flex-col  items-end justify-between '>
                <p className='text-base font-bold tracking-[1px] text-gray-800'>
                    $ {item.product.price * item.quantity}</p>
                <button className='text-xs text-red-500 py-2 font-medium tracking-[1px]' onClick={() => removeItem(item)}>Delete</button>
            </div>
            
        </div>
    )
}

export default CartProductDetail