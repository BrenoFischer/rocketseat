import styled from 'styled-components'

export const CheckoutResumeContainer = styled.section`
  flex-grow: 1;

  h2 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CheckoutResumeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.5rem;

  background: #f3f2f2;
  border-radius: 6px 44px;
`

export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const CheckoutPricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    gap: 8px;
    width: 100%;
  }
`

export const NormalPriceContainer = styled.div`
  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const TotalPriceContainer = styled.div`
  span {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CheckoutConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  border: none;
  cursor: pointer;

  background: ${(props) => props.theme.yellow};
  border-radius: 6px;

  width: 100%;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  font-stretch: 100;
`
