import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  /* max-height: 19.375rem; */

  padding-top: 0.25rem;

  border-radius: 6px 36px;
`

export const CoffeeCardWrapper = styled.div`
  margin-top: -1.5rem;
  padding: 0 1.25rem 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Tags = styled.ul`
  list-style: none;
  margin-top: 0.75rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  li {
    background: ${(props) => props.theme['yellow-light']};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;

    border-radius: 100px;

    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const TextContainer = styled.div`
  margin-top: 1rem;

  text-align: center;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 0.5rem;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme['base-label']};
  }
`

export const PurchaseContainer = styled.div`
  margin-top: 2.05rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.8125;
`

export const Price = styled.div`
  font-size: 0.875rem;
  line-height: 130%;

  text-align: right;

  span {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 31px;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CardShopContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const CardCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  color: ${(props) => props.theme.white};
`
