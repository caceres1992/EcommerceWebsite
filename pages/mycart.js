
import React from 'react'
import PaymentProcess from '../components/PaymentProcess'

const MyCart = () => {
    return (
        <div className=' max-w-7xl mx-auto'>
            <div className='  h-96 bg-cyan-500 relative'>
                <div className=' absolute'>
                    <h3 className=' text-4xl'>ENJOY OUR DEALS</h3>
                </div>
                <img
                    className='w-full h-full  object-center'
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bergerpaints.com%2Fcolour-magazine%2FUpload%2FPosting%2FImage%2Fcolours-fashion-banner-feb15.jpg&f=1&nofb=1&ipt=c2ec9bc71b120219fdf3399f707d46610e0d4b7a398a13a52bbf0271d27d9c22&ipo=images" alt="" />
            </div>
            <div>
                <PaymentProcess />
            </div>
        </div>
    )
}

export default MyCart