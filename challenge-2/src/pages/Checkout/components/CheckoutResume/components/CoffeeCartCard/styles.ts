import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3.6875rem;

  background: ${(props) => props.theme['base-card']};

  img {
    height: 4rem;
  }
`

export const CoffeeCartCardLeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 1.25rem;
`

export const CoffeeCartCardMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    padding: 0;
    gap: 0.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    gap: 0.25rem;
    cursor: pointer;

    border: none;

    height: 2rem;

    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme['base-text']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
export const CoffeeCardCartPrice = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;

  display: flex;
  align-items: center;
  text-align: right;

  color: ${(props) => props.theme['base-text']};
`
