import { useRouter } from 'next/router'
import React from 'react'
import CardProduct from '../../components/CardProduct'
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

    const resProduct = await fetch(`https://fakestoreapi.com/products/${params.pid}`)
    const resProducts = await fetch(`https://fakestoreapi.com/products/`)
    const product = await resProduct.json()
    const products = await resProducts.json()
    return {
        props: { product, products },
    }
}

const Product = ({ product, products }) => {

    return (
        <div className='mx-auto max-w-7xl py-20 '>
            <ProductDetail product={product} />
            <h2 className='text-xl font-bold'>Recommended for you!</h2>
            <div className=' grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full my-10'>
                {products?.splice(Math.floor(Math.random() * products.length), 4)
                    .filter(itemProduct => itemProduct?.id !== product.id)
                    .map(itemProduct => {
                        return <CardProduct key={itemProduct.id} product={itemProduct} />
                    })}
            </div>

        </div>
    )
}

export default Product