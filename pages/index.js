import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { fetchAllProduct } from '../services/FetchProducts'
import axios from 'axios'
import NewWinterCollection from '../components/NewWinterCollection'
import DealOfTheDay from '../components/DealOfTheDay'
import Hero from '../components/Hero'



export async function getStaticProps() {

  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()


  return {
    props: { products }, // will be passed to the page component as props
    revalidate: 5,
  }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gray-50'>
        <Hero />
        <NewWinterCollection products={products} />
        <DealOfTheDay />

      </main>
    </>
  )
}
