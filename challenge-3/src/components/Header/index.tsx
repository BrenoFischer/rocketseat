import { HeaderContainer, LogoContainer } from './styles'

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={Logo} alt="" />
        <span>Github blog</span>
      </LogoContainer>
    </HeaderContainer>
  )
}
