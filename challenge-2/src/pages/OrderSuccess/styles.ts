import styled from 'styled-components'

export const OrderSuccessContainer = styled.div`
  padding: 5rem 10rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    /* Brand / Yellow Dark */

    color: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }

  > div {
    margin-top: 2.5rem;
    display: flex;
    gap: 6.4rem;
  }
`

export const OrderInformationContainer = styled.main`
  padding: 2.5rem;
  box-sizing: border-box;
  max-width: 32.875rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.6rem;

  border-radius: 6px 2.25rem;
  border: 1px solid ${(props) => props.theme.yellow};

  flex-grow: 1;
`

export const OrderInformationComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;
`

export const ICONS_BACKGROUND_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface OrderInformationComponentIconWrapperProps {
  iconBackgroundColor: keyof typeof ICONS_BACKGROUND_COLORS
}

export const OrderInformationComponentIconWrapper = styled.div<OrderInformationComponentIconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  background: ${(props) =>
    props.theme[ICONS_BACKGROUND_COLORS[props.iconBackgroundColor]]};
  border-radius: 1000px;

  color: ${(props) => props.theme.white};
`

export const OrderInformationComponentText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};

  order: 1;
`
