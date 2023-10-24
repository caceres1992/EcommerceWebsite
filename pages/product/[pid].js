import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CardProduct from '../../components/CardProduct'
import ProductDetail from '../../components/ProductDetail'
import useCart from '../../hooks/useCart'



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
    // const { setQuantity } = useCart()
    const resProduct = await fetch(`https://fakestoreapi.com/products/${params.pid}`)
    const resProducts = await fetch(`https://fakestoreapi.com/products/`)
    const product = await resProduct.json()
    const productsData = await resProducts.json()
    const products = productsData?.filter((item) => item.id != params.pid)
    .splice(Math.floor(Math.random() * productsData.length), 4)
                    
    // setQuantity(1)
    return {
        props: { product, products },
    }
}


const Product = ({ product, products }) => {


    return (
        <div className='container max-w-7xl py-20 '>
            <ProductDetail product={product} />
            <h2 className='text-xl font-bold'>Recommended for you!</h2>
            <div className=' grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full my-10'>
                {products?.map(itemProduct => {
                        return <CardProduct key={itemProduct.id} product={itemProduct} />
                    })}
            </div>

        </div>
    )
}

export default Product