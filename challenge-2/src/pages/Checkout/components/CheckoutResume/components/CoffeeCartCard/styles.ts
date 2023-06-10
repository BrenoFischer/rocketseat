import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 10rem;

  background: ${(props) => props.theme['base-card']};

  align-self: stretch;
  flex-grow: 0;

  img {
    height: 4rem;
  }
`
