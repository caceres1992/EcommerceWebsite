import { useRouter } from 'next/router'
import React from 'react'
import ProductDetail from '../../components/ProductDetail'



export async function getStaticPaths() {

    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    const paths = products.map((product) => {
        return {
            params: {
                pid: product?.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.pid}`)
    const product = await res.json()
    return {
        props: { product },
    }
}

const Product = ({ product }) => {

    return (
        <div className='mx-auto max-w-7xl py-20 '>
            <ProductDetail product={product} />

        </div>
    )
}

export default Product