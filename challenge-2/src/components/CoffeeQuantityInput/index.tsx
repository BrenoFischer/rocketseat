import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityContainer } from './styles'

interface CoffeeQuantityInputProps {
  quantity: number
  addQuantity: () => void
  removeQuantity: () => void
}

export function CoffeeQuantityInput({
  quantity,
  addQuantity,
  removeQuantity,
}: CoffeeQuantityInputProps) {
  return (
    <QuantityContainer>
      <button onClick={removeQuantity}>
        <Minus size={14} />
      </button>
      {quantity}
      <button onClick={addQuantity}>
        <Plus size={14} />
      </button>
    </QuantityContainer>
  )
}
