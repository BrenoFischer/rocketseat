import { useContext } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
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
    const { addProductToCart } = useContext(CartContext)

    async function handleBuyProduct() {
        addProductToCart(product);
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
                        Add to cart
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