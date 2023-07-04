import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
      }
}

export default function Product({ product }: ProductProps) {
    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt='' />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>
                <button>
                    Buy now
                </button>
            </ProductDetails>
        </ProductContainer>
    )
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
            }
        },
        revalidate: 60 * 60 * 1,
    }
} 