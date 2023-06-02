import styled from 'styled-components'

export const CatalogContainer = styled.main`
  padding: 2rem 10rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeCardList = styled.ul`
  margin-top: 3.4rem;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;
`
