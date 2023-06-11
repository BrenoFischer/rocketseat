import React, { ReactNode, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'

import {
  CheckoutFormContainer,
  FormFieldsSection,
  FormIconContainer,
  FormPaymentInput,
  FormPaymentsFieldsContainer,
  FormSectionTitleContainer,
  FormTextInput,
  FormTextInputSetWrapper,
} from './styles'
import {
  CartContext,
  DeliveryAddressType,
} from '../../../../contexts/CartContext'

export function CheckoutForm() {
  const { register, handleSubmit } = useForm<DeliveryAddressType>()
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('')

  const { handleFormSubmit, addressInformation } = useContext(CartContext)

  interface FormFieldsSectionComponentProps {
    children?: ReactNode
    iconColor: 'yellow' | 'purple'
    icon: React.JSX.Element
    subtitle: string
    text: string
  }

  function FormFieldsSectionComponent({
    children,
    iconColor,
    icon,
    subtitle,
    text,
  }: FormFieldsSectionComponentProps) {
    return (
      <FormFieldsSection>
        <div>
          <FormIconContainer iconColor={iconColor}>{icon}</FormIconContainer>
          <FormSectionTitleContainer>
            <h3>{subtitle}</h3>
            <p>{text}</p>
          </FormSectionTitleContainer>
        </div>
        {children}
      </FormFieldsSection>
    )
  }

  function handleSubmitOrder(data: DeliveryAddressType) {
    // console.log(data)
    handleFormSubmit(data)
  }

  return (
    <CheckoutFormContainer>
      <h2>Complete your order</h2>
      <form id="cart-form" onSubmit={handleSubmit(handleSubmitOrder)}>
        <FormFieldsSectionComponent
          iconColor="yellow"
          icon={<MapPinLine size={20} />}
          subtitle="Delivery Address"
          text="Provide the address where you would like to receive your order"
        >
          <FormTextInput
            required
            type="text"
            placeholder="Eircode*"
            width={33}
            {...register('eircode')}
          />
          <FormTextInput
            required
            type="text"
            placeholder="Street*"
            width={100}
            {...register('street')}
          />
          <FormTextInputSetWrapper>
            <FormTextInput
              required
              type="text"
              placeholder="Number*"
              width={33}
              {...register('number')}
            />
            <FormTextInput
              type="text"
              placeholder="Address 2"
              width={66}
              {...register('address2')}
            />
          </FormTextInputSetWrapper>
          <FormTextInputSetWrapper>
            <FormTextInput
              type="text"
              placeholder="Neighbourhood"
              width={33}
              {...register('neighbourhood')}
            />
            <FormTextInput
              required
              type="text"
              placeholder="City*"
              width={56}
              {...register('city')}
            />
            <FormTextInput
              required
              type="text"
              placeholder="State*"
              width={11}
              {...register('state')}
            />
          </FormTextInputSetWrapper>
        </FormFieldsSectionComponent>

        <FormFieldsSectionComponent
          iconColor="purple"
          icon={<CurrencyDollar size={20} />}
          subtitle="Payment"
          text="The payment is done upon delivery. Choose the type of payment
                below"
        >
          <FormPaymentsFieldsContainer>
            <FormPaymentInput
              onClick={() => setSelectedPaymentOption('credit')}
              selected={selectedPaymentOption === 'credit'}
            >
              <CreditCard size={16} /> Credit Card
            </FormPaymentInput>
            <FormPaymentInput
              onClick={() => setSelectedPaymentOption('debit')}
              selected={selectedPaymentOption === 'debit'}
            >
              <Bank size={16} /> Debit Card
            </FormPaymentInput>
            <FormPaymentInput
              onClick={() => setSelectedPaymentOption('cash')}
              selected={selectedPaymentOption === 'cash'}
            >
              <Money size={16} /> Cash
            </FormPaymentInput>
          </FormPaymentsFieldsContainer>
        </FormFieldsSectionComponent>
      </form>
      {JSON.stringify(addressInformation)}
    </CheckoutFormContainer>
  )
}
