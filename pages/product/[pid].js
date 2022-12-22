import { useRouter } from 'next/router'
import React from 'react'

// export async function getStaticProps(context) {
//     return {
//         // Passed to the page component as props
//         props: { post: {} },
//     }
// }

const Product = () => {
    const router = useRouter()
    const { pid } = router.query
    return (
        <div className='mx-auto max-w-7xl '> Product: {pid}</div>
    )
}

export default Product