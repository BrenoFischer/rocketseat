import React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import IntroImage from '../../assets/introImage.png'

import {
  ITEM_ICONS_COLORS,
  IntroContainer,
  IntroLeftContainer,
  Item,
  ItemIcon,
  ItemsContainer,
  TitleContainer,
} from './styles'

export function Intro() {
  interface IntroItemProps {
    itemColor: keyof typeof ITEM_ICONS_COLORS
    itemText: string
    itemIcon: React.JSX.Element
  }

  function IntroItem({ itemColor, itemText, itemIcon }: IntroItemProps) {
    return (
      <Item>
        <ItemIcon itemColor={itemColor}>{itemIcon}</ItemIcon>
        {itemText}
      </Item>
    )
  }

  return (
    <IntroContainer>
      <IntroLeftContainer>
        <TitleContainer>
          <h1>Find the perfect coffee for anytime of the day</h1>
          <p>
            With Coffee Delivery you get your coffee wherever you are, anytime
          </p>
        </TitleContainer>
        <ItemsContainer>
          <IntroItem
            itemColor="yellowDark"
            itemText="Simple and secure purchase"
            itemIcon={<ShoppingCart size={18} />}
          />
          <IntroItem
            itemIcon={<Package size={18} />}
            itemColor="base"
            itemText="Packaging that keeps coffee intact"
          />
          <IntroItem
            itemIcon={<Timer size={18} />}
            itemColor="yellow"
            itemText="Fast and tracked delivery"
          />
          <IntroItem
            itemIcon={<Coffee size={18} />}
            itemColor="purple"
            itemText="The coffee that gets fresh to you"
          />
        </ItemsContainer>
      </IntroLeftContainer>
      <img
        src={IntroImage}
        alt="Coffe Cup with coffe grains in the background"
      />
    </IntroContainer>
  )
}
