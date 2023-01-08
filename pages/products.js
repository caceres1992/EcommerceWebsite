import React from 'react'
import OurProducts from '../components/OurProducts'

export async function getStaticProps() {
    const restCategories = await fetch('https://fakestoreapi.com/products/categories')
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    const categories = await restCategories.json()

    return {
        props: { products,categories }, // will be passed to the page component as props
        revalidate: 3,
    }
}


const products = ({ products, categories }) => {
    console.log(categories)
    return (
        <div className='bg-gray-50'>
            <OurProducts products={products} categories={categories} />
        </div>
    )
}

export default products