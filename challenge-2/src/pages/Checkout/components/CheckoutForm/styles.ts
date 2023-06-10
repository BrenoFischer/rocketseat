import styled from 'styled-components'

export const CheckoutFormContainer = styled.div`
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

  form {
    min-width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const FormFieldsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  align-self: stretch;
  flex-grow: 0;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

const ICON_COLORS = {
  yellow: 'yellow-dark',
  purple: 'purple-dark',
} as const

interface FormIconsProps {
  iconColor: keyof typeof ICON_COLORS
}

export const FormIconContainer = styled.div<FormIconsProps>`
  color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
`

export const FormSectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.125rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`

interface FormTextInputProps {
  width: number
}

export const FormTextInput = styled.input<FormTextInputProps>`
  height: 2.625rem;
  width: ${(props) => props.width}%;

  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-label']};

  transition: all 0.2s;

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:not(:placeholder-shown) {
    color: ${(props) => props.theme['base-text']};
  }
`

export const FormTextInputSetWrapper = styled.div`
  display: flex;
`

export const FormPaymentsFieldsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  gap: 0.75rem;
`

interface FormPaymentInputProps {
  selected: boolean
}

export const FormPaymentInput = styled.div<FormPaymentInputProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  cursor: pointer;

  height: 51px;

  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme.purple}`
      : `1px solid ${props.theme['base-button']}`};

  background: ${(props) =>
    props.selected
      ? `${props.theme['purple-light']}`
      : `${props.theme['base-button']}`};
  border-radius: 6px;

  flex-grow: 1;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};

  transition: all 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
