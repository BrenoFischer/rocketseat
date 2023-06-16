import React, { useContext } from 'react'

import OrderSuccessIllustration from '../../assets/orderConfirmationIllustration.png'
import {
  ICONS_BACKGROUND_COLORS,
  OrderInformationComponentIconWrapper,
  OrderInformationComponentText,
  OrderInformationComponentWrapper,
  OrderInformationContainer,
  OrderSuccessContainer,
} from './styles'
import { MapPin, Timer, CurrencyDollarSimple } from '@phosphor-icons/react'
import { CartContext } from '../../contexts/CartContext'

function generatePaymentMethodString(paymentMethod: string | null) {
  if (paymentMethod === null) return ''
  switch (paymentMethod) {
    case 'credit':
      return 'Credit Card'
    case 'debit':
      return 'Debit Card'
    case 'cash':
      return 'Cash'
  }
}

export function OrderSuccess() {
  const { cartFormValues } = useContext(CartContext)
  const { addressInformation, paymentMethod } = cartFormValues
  const { city, state, street, number } = addressInformation

  const paymentMethodString = generatePaymentMethodString(
    paymentMethod.paymentMethod,
  )

  interface OrderInformationComponentProps {
    children: React.JSX.Element
    icon: React.JSX.Element
    iconBackgroundColor: keyof typeof ICONS_BACKGROUND_COLORS
  }

  function OrderInformationComponent({
    icon,
    iconBackgroundColor,
    children,
  }: OrderInformationComponentProps) {
    return (
      <OrderInformationComponentWrapper>
        <OrderInformationComponentIconWrapper
          iconBackgroundColor={iconBackgroundColor}
        >
          {icon}
        </OrderInformationComponentIconWrapper>
        {children}
      </OrderInformationComponentWrapper>
    )
  }

  return (
    <OrderSuccessContainer>
      <h1>Uhu! Order confirmed</h1>
      <h3>Now you just have to wait and your coffee will be soon with you</h3>
      <div>
        <OrderInformationContainer>
          <OrderInformationComponent
            icon={<MapPin size={16} />}
            iconBackgroundColor="purple"
          >
            <div>
              <OrderInformationComponentText>
                Delivery at
                <b>{` ${number}, ${street}`}</b>
              </OrderInformationComponentText>
              <OrderInformationComponentText>
                {`${city}, ${state}`}
              </OrderInformationComponentText>
            </div>
          </OrderInformationComponent>
          <OrderInformationComponent
            icon={<Timer size={16} />}
            iconBackgroundColor="yellow"
          >
            <div>
              <OrderInformationComponentText>
                Delivery forecast
              </OrderInformationComponentText>
              <OrderInformationComponentText>
                <b>20 min - 30 min</b>
              </OrderInformationComponentText>
            </div>
          </OrderInformationComponent>
          <OrderInformationComponent
            icon={<CurrencyDollarSimple size={16} />}
            iconBackgroundColor="yellowDark"
          >
            <div>
              <OrderInformationComponentText>
                Pay at delivery
              </OrderInformationComponentText>
              <OrderInformationComponentText>
                <b>{paymentMethodString || ''}</b>
              </OrderInformationComponentText>
            </div>
          </OrderInformationComponent>
        </OrderInformationContainer>
        <div>
          <img
            src={OrderSuccessIllustration}
            alt="Illustration of order being delivered with a motocycle"
          />
        </div>
      </div>
    </OrderSuccessContainer>
  )
}
