import React from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai'
import useCart from '../hooks/useCart';
const ProductDetail = ({ product }) => {

    const { addProductToCart, quantity, incQuantity, descQuantity } = useCart();
    return (
        <div>
            <div className='flex  items-start justify-between gap-20'>
                <div className='flex-1 '>
                    <img src={product.image} className='h-[500px] mx-auto py-10 b' />
                </div>
                <div className='flex-1'>
                    <h2 className='font-black capitalize text-3xl md:text-4xl'>
                        {product.category}

                    </h2>
                    <p className= ' text-gray-900 font-medium text-base'>
                        {product.title}
                    </p>
                    <div className='text-xs text-gray-400 flex  items-center py-3'>
                        <div className='flex gap-0.5'>
                            <AiFillStar color='orange' size={14} />
                            <AiFillStar color='orange' size={14} />
                            <AiFillStar color='orange' size={14} />
                            <AiFillStar color='orange' size={14} />
                            <AiFillStar color='orange' size={14} />
                        </div>
                        <span>({product.rating.count})</span>
                    </div>
                    <h5 className='text-gray-800 font-bold pb-1'>Description</h5>
                    <p className='text-gray-800 text-base pr-3'>   {product.description}</p>

                    <p className='font-bold text-3xl text-gray-800 my-2 tracking-[2px]'> ${product.price}</p>

                    <div className='flex items-start gap-x-2 '>
                        <div className='border w-fit text-center flex items-center rounded-sm'>
                            <button onClick={() => descQuantity()}
                                className='flex-1 py-1 px-2 '>
                                <AiOutlineMinus />
                            </button>
                            <span className='p-1  w-8'>{quantity}</span>
                            <button onClick={() => incQuantity()}
                                className='flex-1 py-1 px-2' >
                                <AiOutlinePlus />
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <button onClick={() => addProductToCart(product)}
                                className='bg-amber-700 rounded-sm hover:bg-amber-800 py-2.5 px-10 text-white text-xs font-bold capitalize tracking-[1px]'>Add to basket </button>
                            <button className='flex  items-center justify-center gap-x-1 py-1 text-sm'>    <AiOutlineHeart className='   text-gray-900 ' size={16} />Add To Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail