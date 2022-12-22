import React from 'react'

const Hero = () => {
    return (
        <div className='py-20 px-5 xl:px-0 bg-sky-50'>
            <div className='flex   justify-center md:justify-between gap-20  flex-col lg:flex-row items-center max-w-7xl mx-auto'>
                <div className='flex-1 text-center md:text-left'>
                    <h1 className=' text-7xl font-extrabold  w-[460px] text-center lg:text-left'><strong className='text-8xl text-sky-800'>BE</strong> BETTER THAN GAP</h1>
                    <p className=' text-center md:text-left my-6 text-gray-500'>
                        Amet consectetur adipisicing elit. Eos at odit ipsa cum perspiciatis, ipsam cupiditate reprehenderit ut voluptatibus, laudantium enim repudiandae quia. Nisi iure quas perferendis officiis sapiente? Rem!
                    </p>

                    <button className='bg-sky-600 text-gray-50 py-3 px-10 shadow-sm rounded-xl hover:bg-sky-500'>Shop Now</button>
                </div>
                <div className='flex-1'>

                    <img className=' w-full h-full  ' src='./assets/girlshopping.png' />
                </div>

            </div>
        </div>
    )
}

export default Hero