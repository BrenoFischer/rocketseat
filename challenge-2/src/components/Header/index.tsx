import Logo from '../../assets/logo.png'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import {
  CartContainer,
  HeaderContainer,
  HeaderRightItemsContainer,
  LocationContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <HeaderRightItemsContainer>
        <LocationContainer>
          <MapPin size={22} />
          <span>Rio de Janeiro, RJ</span>
        </LocationContainer>
        <CartContainer>
          <ShoppingCart size={22} />
        </CartContainer>
      </HeaderRightItemsContainer>
    </HeaderContainer>
  )
}
