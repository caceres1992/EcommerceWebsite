import React from 'react'

const DealOfTheDay = () => {
    return (

        <div className='  py-10 text-center'>
            <h2 className=' textTitle'>Deal Of The Day</h2>
            <p className='px-5 xl:px-0 md:w-[500px] text-center mx-auto mt-4 text-sm text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque, ducimus facere incidunt, commodi fugiat.l
            </p>
            <div className='bg-sky-100'>
                <div className='my-20 max-w-7xl mx-auto px-5 xl:px-0  py-10 flex flex-col lg:flex-row justify-between items-center gap-x-20'>
                    <div className=' text-left flex-1  space-y-2'>
                        <h3 className=' text-2xl font-medium text-sky-900'>Deal Of The Day</h3>

                        <p className='text-sm text-gray-500'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, aliquid perferendis sapiente, dolorum cupiditate ? </p>
                        <p className=' text-6xl text-gray-800 font-bold py-5'>50% OFF</p>

                        <button className='bg-sky-600 text-gray-50 py-3 px-10 shadow-sm rounded-xl hover:bg-sky-500'>Shop Now</button>
                    </div>
                    <img src={'./assets/people.png'} className="  w-auto lg:h-[400px] lg:flex-1 p-2 " />
                </div>
            </div>

        </div>
    )
}

export default DealOfTheDay