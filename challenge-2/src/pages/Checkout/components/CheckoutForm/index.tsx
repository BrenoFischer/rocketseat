import React, { ReactNode, useState } from 'react'
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

export function CheckoutForm() {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('')

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

  return (
    <CheckoutFormContainer>
      <h2>Complete your order</h2>
      <form>
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
          />
          <FormTextInput
            required
            type="text"
            placeholder="Street*"
            width={100}
          />
          <FormTextInputSetWrapper>
            <FormTextInput
              required
              type="text"
              placeholder="Number*"
              width={33}
            />
            <FormTextInput type="text" placeholder="Address 2" width={66} />
          </FormTextInputSetWrapper>
          <FormTextInputSetWrapper>
            <FormTextInput type="text" placeholder="Neighbourhood" width={33} />
            <FormTextInput
              required
              type="text"
              placeholder="City*"
              width={56}
            />
            <FormTextInput
              required
              type="text"
              placeholder="State*"
              width={11}
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
    </CheckoutFormContainer>
  )
}
