import styled from 'styled-components'

export const IntroContainer = styled.section`
  padding: 5.75rem 10rem;
  display: flex;
  justify-content: space-between;
`

export const IntroLeftContainer = styled.div`
  max-width: 36.75rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const ItemsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;

  margin-top: 4.125rem;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ITEM_ICONS_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  base: 'base-text',
  purple: 'purple',
} as const

interface ItemIconProps {
  itemColor: keyof typeof ITEM_ICONS_COLORS
}

export const ItemIcon = styled.div<ItemIconProps>`
  background: ${(props) => props.theme[ITEM_ICONS_COLORS[props.itemColor]]};
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  color: ${(props) => props.theme.white};
`
