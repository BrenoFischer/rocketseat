import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { CartContext } from '../../contexts/CartContext'

import Logo from '../../assets/logo.png'

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
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <HeaderRightItemsContainer>
        <LocationContainer>
          <MapPin size={22} />
          <span>Rio de Janeiro, RJ</span>
        </LocationContainer>
        <Link to="/checkout">
          <CartContainer>
            {coffeesQuantity > 0 && (
              <CartQuantityIndicator>{coffeesQuantity}</CartQuantityIndicator>
            )}
            <ShoppingCart size={22} />
          </CartContainer>
        </Link>
      </HeaderRightItemsContainer>
    </HeaderContainer>
  )
}
