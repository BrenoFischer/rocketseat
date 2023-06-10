import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutResume } from './components/CheckoutResume'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <CheckoutResume />
    </CheckoutContainer>
  )
}
