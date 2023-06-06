import Logo from '../../assets/logo.png'
import { useContext } from 'react'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { CartContext } from '../../contexts/CartContext'

import {
  CartContainer,
  CartQuantityIndicator,
  HeaderContainer,
  HeaderRightItemsContainer,
  LocationContainer,
} from './styles'

export function Header() {
  const { getCoffeesQuantity } = useContext(CartContext)

  const coffeesQuantity = getCoffeesQuantity()

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <HeaderRightItemsContainer>
        <LocationContainer>
          <MapPin size={22} />
          <span>Rio de Janeiro, RJ</span>
        </LocationContainer>
        <CartContainer>
          {coffeesQuantity > 0 && (
            <CartQuantityIndicator>{coffeesQuantity}</CartQuantityIndicator>
          )}
          <ShoppingCart size={22} />
        </CartContainer>
      </HeaderRightItemsContainer>
    </HeaderContainer>
  )
}
