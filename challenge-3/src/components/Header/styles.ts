import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  padding-top: 4rem;
  height: 18.5rem;
  background: ${(props) => props.theme['base-profile']};
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 1.25rem;

  span {
    font-family: 'Coda';
    font-size: 1.5rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme.blue};
  }
`
