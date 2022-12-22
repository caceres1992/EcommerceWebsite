import React from 'react'
import OurProducts from '../components/OurProducts'

export async function getStaticProps() {

    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()


    return {
        props: { products }, // will be passed to the page component as props
        revalidate: 10,
    }
}


const products = ({ products }) => {
    console.log(products)
    return (
        <div>
            <OurProducts products={products} />
        </div>
    )
}

export default products