import { useContext, Fragment } from 'react'

import {
  CheckoutConfirmButton,
  CheckoutPricesContainer,
  CheckoutResumeContainer,
  CheckoutResumeInfoWrapper,
  Divider,
  NormalPriceContainer,
  TotalPriceContainer,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeCartCard } from './components/CoffeeCartCard'

export function CheckoutResume() {
  const { coffees, getTotalCartPrice } = useContext(CartContext)

  const totalCartPrice = getTotalCartPrice()
  const deliveryPrice = 3.5
  const totalPurchasePrice = (totalCartPrice + deliveryPrice).toFixed(2)

  return (
    <CheckoutResumeContainer>
      <h2>Selected Coffees</h2>
      <CheckoutResumeInfoWrapper>
        {coffees.map((coffee) => {
          return (
            <Fragment key={coffee.coffee.title}>
              <CoffeeCartCard
                key={coffee.coffee.title}
                coffee={coffee.coffee}
                quantity={coffee.quantity}
              />
              <Divider />
            </Fragment>
          )
        })}
        <CheckoutPricesContainer>
          <NormalPriceContainer>
            <span>Total Items Price:</span>{' '}
            <span>€{totalCartPrice.toFixed(2)}</span>
          </NormalPriceContainer>
          <NormalPriceContainer>
            <span>Delivery:</span> <span>€{deliveryPrice.toFixed(2)}</span>
          </NormalPriceContainer>
          <TotalPriceContainer>
            <span>Total:</span> <span>€{totalPurchasePrice}</span>
          </TotalPriceContainer>
        </CheckoutPricesContainer>
        <CheckoutConfirmButton>Confirm Purchase</CheckoutConfirmButton>
      </CheckoutResumeInfoWrapper>
    </CheckoutResumeContainer>
  )
}
