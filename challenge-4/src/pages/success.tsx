import Link from "next/link";
import { ImageContainer, ImagesContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

// interface SuccessProps {
//     customerName: string;
//     product: {
//         name: string;
//         imageUrl: string;
//     }
// }

interface SuccessProps {
    customerName: string;
    products: Stripe.Product[]
}

export default function Success({ customerName, products }: SuccessProps) {
    return(
        <>
            <Head>
                <title>Purchase complete | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>
            
            <SuccessContainer>
                <h1>Purchase complete!</h1>
                <ImagesContainer>
                    { products.map(product => {
                        return(
                        <ImageContainer>
                            <Image key={product.name} src={product.images[0]} width={120} height={110} alt="" />
                        </ImageContainer>
                        )
                    })}
                </ImagesContainer>

                <p>Uhuul <strong>{customerName}</strong>, your <strong>{products.length}</strong> shirts purchase is already on the way to your delivery address.</p>

                <Link href="/">
                    Back to Catalog
                </Link>
            </SuccessContainer>
        </>

    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if(!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);


    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const customerName = session.customer_details.name;

    console.log(session.line_items.data)
    const lineItemsData = session.line_items.data
    const products = lineItemsData.map(lineItem => lineItem.price.product)

    return {
        props: {
            customerName,
            products: products,
        }
    }
}