import Link from "next/link";
import { CartQuantityContainer, Header, IconContainer } from "../styles/pages/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import axios from "axios";
import logoImg from '../assets/logo.svg'



export default function HeaderComponent() {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const { products } = useContext(CartContext);

    const productsQuantity = products?.length;
  
    async function handleBuyProducts() {
      const pricesId = products.map(product => product.defaultPriceId)
  
      try {
            setIsCreatingCheckoutSession(true);

          const response = await axios.post('/api/checkout', {
            pricesId: pricesId,
          })
      
          const { checkoutUrl } = response.data;
      
          window.location.href = checkoutUrl
      } catch(err) {
            setIsCreatingCheckoutSession(false);
            alert('Error during checkout redirect')
      }
    }

    return(
        <Header>
          <Link href={'/'}>
            <Image src={logoImg} alt="" />
          </Link>
          <IconContainer>
            <Handbag size={24} onClick={handleBuyProducts} />
            {productsQuantity > 0 ? 
                <CartQuantityContainer>{productsQuantity}</CartQuantityContainer> 
              :
                <></>
            }
          </IconContainer>
        </Header>
    );
}