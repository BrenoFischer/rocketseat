import { useContext } from 'react'
import { CoffeeQuantityInput } from '../../../../../../components/CoffeeQuantityInput'
import { CoffeeAndQuantity } from '../../../../../../reducers/coffee/reducer'
import { CoffeeCartCardContainer } from './styles'
import { CartContext } from '../../../../../../contexts/CartContext'

export function CoffeeCartCard({ coffee, quantity }: CoffeeAndQuantity) {
  const { changeQuantityOfCoffeeOnCart } = useContext(CartContext)

  function addQuantityOfCoffeeOnCart() {
    changeQuantityOfCoffeeOnCart(coffee.title, 1)
  }

  function removeQuantityOfCoffeeOnCart() {
    changeQuantityOfCoffeeOnCart(coffee.title, -1)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.img} alt="" />
      </div>
      <div>
        <h3>{coffee.title}</h3>
        <CoffeeQuantityInput
          quantity={quantity}
          addQuantity={addQuantityOfCoffeeOnCart}
          removeQuantity={removeQuantityOfCoffeeOnCart}
        />
      </div>
      <div>
        <p>{coffee.price}</p>
      </div>
    </CoffeeCartCardContainer>
  )
}
