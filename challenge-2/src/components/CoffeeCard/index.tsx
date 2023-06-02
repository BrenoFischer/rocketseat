import { ShoppingCart } from '@phosphor-icons/react'

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

interface CoffeeCardProps {
  img: string
  tags: string[]
  title: string
  text: string
  price: string
}

export function CoffeeCard({ img, tags, title, text, price }: CoffeeCardProps) {
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
