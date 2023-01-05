import Link from 'next/link';
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import useCart from '../hooks/useCart'

const PaymentProcess = () => {
    const { cartList, descProductQA, ascProductQA, totalPrice } = useCart();

    const handleCodePromo = (e) => {
        e.preventDefault();
        alert(' This button does not work')
    }
    return (
        <div>
            {cartList.length > 0 ?

                <div className='px-5 xl:px-0 py-10 flex gap-5 '>
                    <main className='flex-1 h-[500px] overflow-auto pr-4'>

                        <ul>
                            {cartList.map(item => {
                                return <li className='border-b py-4 border-gray-100'>
                                    <div className='flex  gap-2 justify-between items-center'>
                                        <div className='h-[120px] w-[120px] '>
                                            <img width={120} height={120}
                                                className="rounded-md w-full  h-full  p-2 object-contain" src={item.product.image} />
                                        </div>
                                        <div className='text-gray-500 space-y-1.5 flex-1 '>
                                            <p className='text-sm capitalize'>{item.product.title} </p>
                                            <p className='font-bold text-xs capitalize'> {item.product.category} </p>

                                        </div>

                                        <div className='border w-fit mx-10 h-fit text-center flex items-center rounded-sm'>
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
                                        <div className='w-24 text-right'>
                                            <button className='text-xs text-red-500 py-2 
                                            font-medium tracking-[1px]' onClick={() => console.log('es')}>Delete</button>

                                            <div className=''>
                                                <span className='text-base font-bold tracking-[1px] text-gray-800'>
                                                    ${(item.quantity * item.product.price).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            })}

                        </ul>

                    </main>

                    <aside className='w-96 h-fit rounded-md shadow-lg p-4'>
                        <form onSubmit={handleCodePromo}>
                            <div className='space-y-2 py-4'>
                                <label for="promoCode" className='block text-gray-400 text-sm'>Promo code?</label>
                                <div className='flex border rounded-lg overflow-hidden
                                 border-gray-600'>

                                    <input
                                        className='p-2 text-sm w-full text-gray-400  uppercase placeholder:capitalize border-red-600'
                                        name="promoCode" placeholder='Enter your promo code' />
                                    <button type={'submit'}
                                        className='bg-sky-600 text-gray-50 py-1.5 px-5 shadow-sm rounded-br-lg rounded-tr-lg hover:bg-sky-500'
                                    >Active</button>
                                </div>
                                <p className='text-xs text-gray-400 pt-2'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. </p>
                            </div>
                        </form>
                    </aside>
                </div>
                : <h2>You dont have any item </h2>}

            <div className='sticky bottom-0 bg-white py-4'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-gray-800 tracking-[1px]'>
                        Subtotal ${(totalPrice).toFixed(2)}
                    </p>
                    <div className='space-x-5'>
                        <Link href={'/products'} className=' py-2.5 px-10 text-sky-600'>Back to Shop</Link>
                        <button className='bg-sky-600 text-gray-50 py-2.5 px-10 shadow-sm rounded-xl hover:bg-sky-500'>Continue to payment</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PaymentProcess