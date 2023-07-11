import { useContext, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import axios from 'axios'
import Stripe from 'stripe'

import { stripe } from '../../lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product'
import { CartContext } from '@/src/contexts/CartContext'

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
      }
}

export default function Product({ product }: ProductProps) {
    // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const { addProductToCart } = useContext(CartContext)

    async function handleBuyProduct() {
        // try {
            // setIsCreatingCheckoutSession(true);

            // const response = await axios.post('/api/checkout', {
            //     priceId: product.defaultPriceId,
            // })

            // const { checkoutUrl } = response.data;

            // window.location.href = checkoutUrl
            addProductToCart(product);
        // } catch(err) {
        //     setIsCreatingCheckoutSession(false);
        //     alert('Error during checkout redirect')
        // }
    }

    const { isFallback } = useRouter()

    if(isFallback) {
        return <p>Loading</p>
    }

    return(
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt='' />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>
                    {/* <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}> */}
                    <button onClick={handleBuyProduct}>
                        Buy now
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: {id: 'prod_OCHc3qCtbPUbJZ'} }
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price
    
    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount ? new Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'EUR',
                }).format(price.unit_amount/100) : 0,
                description: product.description,
                defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1,
    }
} 