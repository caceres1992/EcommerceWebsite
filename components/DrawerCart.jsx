import React from 'react'
import useCart from '../hooks/useCart'
import CartProductDetail from './CartProductDetail'

const DrawerCart = () => {

    const { cartList, setDrawerIsOpen, drawerIsOpen,totalAllProducts } = useCart()
    return (

        <div className={`${drawerIsOpen ? 'w-96' : 'w-0'} transition-all ease-in-out overflow-hidden  bg-gray-50  h-full flex flex-col justify-between  py-3  top-0 fixed right-0`}>
            <div className='px-3 pb-3 flex justify-between border-b-2 border-gray-300'>

                <p className='text-sm font-medium'> {totalAllProducts} Products - Sub total: <span className='text-xl text-blue-700 tracking-[1px]'>$340</span> </p>
                <button className='text-gray-900 font-bold text-sm'
                    onClick={() => setDrawerIsOpen(false)}>Close X</button>
            </div>
            <div className=' p-3 flex-1 flex flex-col gap-y-4'>

                {cartList.length > 0 ? (
                    cartList?.map((item, idx) => <CartProductDetail key={idx} item={item} />)
                ) : (
                    <div>
                        <p className='text-md text-center pt-10 text-gray-400 font-light'>
                            Dear Client, your cart is empty</p>
                        <button className='py-2 mx-auto w-full mt-10 bg-blue-400
                         text-gray-50  rounded-sm'> Go shopping</button>
                    </div>
                )}
            </div>

            <div className=' pt-3 px-3 border-gray-300  border-t-2'>
                <button className='py-2 w-full font-semibold tracking-[1px] bg-black text-gray-50 rounded-sm '>Cheking </button>
            </div>
        </div>
    )
}

export default DrawerCart