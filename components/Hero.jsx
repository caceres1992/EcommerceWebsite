import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='pt-24 px-5 xl:px-0 bg-sky-50'>
            <div className='flex   justify-center md:justify-between gap-20  flex-col lg:flex-row items-center max-w-7xl mx-auto'>
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-5xl md:text-6xl font-extrabold mx-auto lg:mx-0  md:w-[460px] text-center lg:text-left'><strong className='text-7xl md:text-8=xl text-sky-800'>BE</strong> BETTER THAN THE GAP</h1>
                    <p className=' text-center lg:text-left my-6 text-gray-500 text-sm md:text-sm '>
                        Amet consectetur adipisicing elit. Eos at odit ipsa cum perspiciatis, ipsam cupiditate reprehenderit ut voluptatibus, laudantium enim repudiandae quia. Nisi iure quas perferendis officiis sapiente? Rem!
                    </p>

                    <Link href={"/products"} className='bg-sky-600 text-gray-50 py-2.5 px-10 shadow-sm rounded-xl hover:bg-sky-500'>Shop Now</Link>
                </div>
                <div className='flex-1'>
                    <img className='   w-full h-full ' src='./assets/girlshopping.png' />
                </div>

            </div>
        </div>
    )
}

export default Hero