import Link from "next/link";
import { CartMenuContainer, CartMenuWrapper, CartProductContainer, CartQuantityContainer, CartSubmitButtonWrapper, CartTotalDetailsContainer, CloseIconContainer, Header, IconContainer, ImageContainer, ProductDetailsCartContainer, QuantityIndicator, QuantityOnCart, TotalPriceIndicator, TotalPriceOnCart } from "../styles/pages/app";
import Image from "next/image";
import { Handbag, X } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import axios from "axios";
import logoImg from '../assets/logo.svg'



export default function HeaderComponent() {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const { products, cartIsOpen, toggleCartState, removeProductFromCart } = useContext(CartContext);

    const productsQuantity = products?.length;
    const totalPriceRaw = products.reduce((acc, product) => acc + parseFloat(product.price.slice(1, product.price.length - 1)), 0)
  
    const totalPrice = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'EUR',
        }).format(totalPriceRaw)

    function handleRemoveProductFromCart(priceId: string) {
        removeProductFromCart(priceId);
    }

    async function handleBuyProducts() {
        toggleCartState();
    //   const pricesId = products.map(product => product.defaultPriceId)
  
    //   try {
    //         setIsCreatingCheckoutSession(true);

    //       const response = await axios.post('/api/checkout', {
    //         pricesId: pricesId,
    //       })
      
    //       const { checkoutUrl } = response.data;
      
    //       window.location.href = checkoutUrl
    //   } catch(err) {
    //         setIsCreatingCheckoutSession(false);
    //         alert('Error during checkout redirect')
    //   }
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
            {cartIsOpen && 
                <CartMenuContainer>
                    <CloseIconContainer onClick={toggleCartState}><X size={20} /></CloseIconContainer>
                    <h2>Shopping Cart</h2>  
                    {productsQuantity > 0 ? 
                        <CartMenuWrapper>
                            <div>
                                {products.map(product => {
                                    return(
                                        <CartProductContainer>
                                            <ImageContainer>
                                                <Image src={product.imageUrl} alt="" width={100} height={100} />
                                            </ImageContainer>
                                            <ProductDetailsCartContainer>
                                                <div>
                                                    <h3>{product.name}</h3>
                                                    <p>{product.price}</p>
                                                </div>
                                                <button onClick={() => handleRemoveProductFromCart(product.defaultPriceId)}>Remove</button>
                                            </ProductDetailsCartContainer>
                                        </CartProductContainer>
                                    )
                                })}
                            </div>
                            <div>
                                <CartTotalDetailsContainer>
                                    <QuantityIndicator>Quantity</QuantityIndicator>
                                    <QuantityOnCart>{productsQuantity} items</QuantityOnCart>
                                </CartTotalDetailsContainer>
                                <CartTotalDetailsContainer>
                                    <TotalPriceIndicator>Total Price</TotalPriceIndicator>
                                    <TotalPriceOnCart>{totalPrice}</TotalPriceOnCart>
                                </CartTotalDetailsContainer>
                                <CartSubmitButtonWrapper>
                                    <button type="submit">Checkout</button>
                                </CartSubmitButtonWrapper>
                            </div>
                        </CartMenuWrapper>
                    :
                        <div>Empty Cart</div>
                    } 
                </CartMenuContainer>
            }
        </Header>
    );
}