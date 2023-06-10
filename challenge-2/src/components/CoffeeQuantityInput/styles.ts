import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.25rem;

  width: 4.5rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    border: none;
    cursor: pointer;
    background: inherit;
    display: flex;
    align-items: center;

    color: ${(props) => props.theme['purple-dark']};
  }
`
