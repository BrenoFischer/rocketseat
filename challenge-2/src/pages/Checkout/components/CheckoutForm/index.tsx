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
  CartFormValuesType,
  PaymentMethodType,
} from '../../../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

export function CheckoutForm() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<CartFormValuesType>()

  const { handleFormSubmit, cartFormValues, changePaymentMethod } =
    useContext(CartContext)

  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<PaymentMethodType>(cartFormValues.paymentMethod)

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

  function onPaymentMethodChange(paymentMethod: PaymentMethodType) {
    changePaymentMethod(paymentMethod)
    setSelectedPaymentOption(paymentMethod)
  }

  function handleSubmitOrder(data: CartFormValuesType) {
    if (selectedPaymentOption.paymentMethod === null) {
      alert('Choose a payment method')
    } else {
      handleFormSubmit(data)
      navigate('/success', { replace: true })
    }
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
            {...register('addressInformation.eircode')}
          />
          <FormTextInput
            required
            type="text"
            placeholder="Street*"
            width={100}
            {...register('addressInformation.street')}
          />
          <FormTextInputSetWrapper>
            <FormTextInput
              required
              type="text"
              placeholder="Number*"
              width={33}
              {...register('addressInformation.number')}
            />
            <FormTextInput
              type="text"
              placeholder="Address 2"
              width={66}
              {...register('addressInformation.address2')}
            />
          </FormTextInputSetWrapper>
          <FormTextInputSetWrapper>
            <FormTextInput
              type="text"
              placeholder="Neighbourhood"
              width={33}
              {...register('addressInformation.neighbourhood')}
            />
            <FormTextInput
              required
              type="text"
              placeholder="City*"
              width={56}
              {...register('addressInformation.city')}
            />
            <FormTextInput
              required
              type="text"
              placeholder="State*"
              width={11}
              {...register('addressInformation.state')}
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
              onClick={() => onPaymentMethodChange({ paymentMethod: 'credit' })}
              selected={selectedPaymentOption.paymentMethod === 'credit'}
            >
              <CreditCard size={16} /> Credit Card
            </FormPaymentInput>
            <FormPaymentInput
              onClick={() => onPaymentMethodChange({ paymentMethod: 'debit' })}
              selected={selectedPaymentOption.paymentMethod === 'debit'}
            >
              <Bank size={16} /> Debit Card
            </FormPaymentInput>
            <FormPaymentInput
              onClick={() => onPaymentMethodChange({ paymentMethod: 'cash' })}
              selected={selectedPaymentOption.paymentMethod === 'cash'}
            >
              <Money size={16} /> Cash
            </FormPaymentInput>
          </FormPaymentsFieldsContainer>
        </FormFieldsSectionComponent>
      </form>
    </CheckoutFormContainer>
  )
}
