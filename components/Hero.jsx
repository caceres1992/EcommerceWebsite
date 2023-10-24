import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className=' container mx-auto rounded-lg bg-cover bg-center block  '
        style={{ backgroundImage:'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F837491-winter-snow-landscape-nature.jpg&f=1&nofb=1&ipt=aa1f3fbaa3140dd18fc3ee17c0a9737c16b38333b25a08016ea390c8a3cf5dd1&ipo=images")'}}
        >
            <div className=' grid md:grid-cols-2 bg-cover bg-center mt-10 p-10 overflow-hidden'>
                <div className=' flex flex-col justify-center  pt-20 md:pt-0  text-center lg:text-left md:w-[450px] '>
                    <h1 className='text-4xl md:text-5xl uppercase  text-gray-50
                    font-black mx-auto lg:mx-0  text-center lg:text-left'>
                        Elevate Your <span className='  text-amber-800'>Winter</span>  Style
                    </h1>
                    <p className=' text-center lg:text-left text-gray-200  mt-4  text-sm md:text-base '>
                        Explore our winter collection for the perfect blend of fashion and function.
                    </p>

                    <Link href={"/products"} className='bg-amber-700  mx-auto lg:mx-0 border border-white/50 text-gray-50 block w-fit mt-10 py-2.5 md:py-4  px-10  rounded-xl hover:bg-amber-800'>Shop now!</Link>
                </div>
                <div className='flex-1'>
                    <img className='   w-full h-full relative -bottom-32   max-h-96 lg:max-h-[450px] object-contain ' src='./assets/winterperson.png' />
                </div>

            </div>
        </div>
    )
}

export default Hero