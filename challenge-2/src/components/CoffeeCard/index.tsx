import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

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
import { useState } from 'react'

interface CoffeeCardProps {
  img: string
  tags: string[]
  title: string
  text: string
  price: string
}

export function CoffeeCard({ img, tags, title, text, price }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

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
            <QuantityContainer>
              <button onClick={() => changeQuantity(-1)}>
                <Minus size={13} />
              </button>
              {quantity}
              <button onClick={() => changeQuantity(1)}>
                <Plus size={13} />
              </button>
            </QuantityContainer>
            <CardCartContainer>
              <ShoppingCart size={17} />
            </CardCartContainer>
          </CardShopContainer>
        </PurchaseContainer>
      </CoffeeCardWrapper>
    </CoffeeCardContainer>
  )
}
