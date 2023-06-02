import { ShoppingCart } from '@phosphor-icons/react'
import Mochaccino from '../../assets/coffees/mochaccino.png'

import {
  CardCartContainer,
  CardShopContainer,
  CoffeeCardContainer,
  CoffeeCardWrapper,
  Price,
  PurchaseContainer,
  QuantityContainer,
  Tags,
  TextContainer,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardWrapper>
        <div>
          <img src={Mochaccino} alt="Coffee on cup" />
        </div>
        <Tags>
          <li>Traditional</li>
          <li>+ Milk</li>
          <li>+ Milk</li>
        </Tags>
        <TextContainer>
          <h3>Mochaccino</h3>
          <p>Espresso coffee with chocolate, a little milk and foam</p>
        </TextContainer>
        <PurchaseContainer>
          <Price>
            R$ <span>9,90</span>
          </Price>
          <CardShopContainer>
            <QuantityContainer>- 1 +</QuantityContainer>
            <CardCartContainer>
              <ShoppingCart size={17} />
            </CardCartContainer>
          </CardShopContainer>
        </PurchaseContainer>
      </CoffeeCardWrapper>
    </CoffeeCardContainer>
  )
}
