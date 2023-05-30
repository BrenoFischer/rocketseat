import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
`

export const HeaderRightItemsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
