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
  /* width: 368px;
height: 0px; */

  border: 1px solid #e6e5e5;
  margin-bottom: 1.5rem;
`
