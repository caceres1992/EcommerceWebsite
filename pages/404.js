
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='pt-32 bg-gray-900 text-gray-100 h-screen text-center space-y-4'>
            <h1 className='text-6xl '>Opsssss....</h1>
            <img
                className=' mx-auto '
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmpnu.ir%2Fwp-content%2Fthemes%2Firanthemes%2Fimages%2F404-error.png&f=1&nofb=1&ipt=62b17ec2540bb7854f87fc529066f0a6dc06fca2380dff156a2740cf1f0aebfd&ipo=images'
            />
            <p className='text-gray-500 font-medium'>That page cannot be found.</p>
            <Link href={"/"} className='bg-black block text-white uppercase text-sm font-medium w-fit mx-auto px-10 py-2 rounded-md'>Go back to home</Link>
        </div>
    )
}

export default NotFound