import { ShoppingCart } from '@phosphor-icons/react'

import {
  CardCartContainer,
  CardShopContainer,
  CoffeeCardContainer,
  CoffeeCardWrapper,
  Price,
  PurchaseContainer,
  Tags,
  TextContainer,
} from './styles'
import { useContext, useState } from 'react'
import { Coffee } from '../../../../reducers/coffee/reducer'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeQuantityInput } from '../../../../components/CoffeeQuantityInput'

export interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { img, tags, title, text, price } = coffee
  const [quantity, setQuantity] = useState(1)

  const { addCoffeeToCart } = useContext(CartContext)

  function addCoffeeCardAndQuantityToCart() {
    const newCoffeeToCart = {
      coffee,
      quantity,
    }

    addCoffeeToCart(newCoffeeToCart)
  }

  function changeQuantity(amountToChange: number) {
    const newQuantity = quantity + amountToChange
    if (newQuantity > 0 && newQuantity < 100) {
      setQuantity(newQuantity)
    }
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardWrapper>
        <div>
          <img src={img} alt="Coffee on cup" />
        </div>
        <Tags>
          {tags.map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </Tags>
        <TextContainer>
          <h3>{title}</h3>
          <p>{text}</p>
        </TextContainer>
        <PurchaseContainer>
          <Price>
            R$ <span>{price}</span>
          </Price>
          <CardShopContainer>
            <CoffeeQuantityInput
              quantity={quantity}
              addQuantity={() => changeQuantity(1)}
              removeQuantity={() => changeQuantity(-1)}
            />
            <CardCartContainer onClick={addCoffeeCardAndQuantityToCart}>
              <ShoppingCart size={17} />
            </CardCartContainer>
          </CardShopContainer>
        </PurchaseContainer>
      </CoffeeCardWrapper>
    </CoffeeCardContainer>
  )
}
