import { useContext } from 'react'

import {
  CheckoutResumeContainer,
  CheckoutResumeInfoWrapper,
  Divider,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeCartCard } from './components/CoffeeCartCard'

export function CheckoutResume() {
  const { coffees } = useContext(CartContext)

  return (
    <CheckoutResumeContainer>
      <h2>Selected Coffees</h2>
      <CheckoutResumeInfoWrapper>
        {coffees.map((coffee, idx) => {
          return (
            <>
              <CoffeeCartCard
                key={coffee.coffee.title + idx}
                coffee={coffee.coffee}
                quantity={coffee.quantity}
              />
              <Divider />
            </>
          )
        })}
      </CheckoutResumeInfoWrapper>
    </CheckoutResumeContainer>
  )
}
