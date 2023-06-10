import { useContext } from 'react'
import { CoffeeQuantityInput } from '../../../../../../components/CoffeeQuantityInput'
import { CoffeeAndQuantity } from '../../../../../../reducers/coffee/reducer'
import {
  CoffeeCardCartPrice,
  CoffeeCartCardContainer,
  CoffeeCartCardLeftContainer,
  CoffeeCartCardMiddleContainer,
} from './styles'
import { CartContext } from '../../../../../../contexts/CartContext'
import { Trash } from '@phosphor-icons/react'

export function CoffeeCartCard({ coffee, quantity }: CoffeeAndQuantity) {
  const { changeQuantityOfCoffeeOnCart, deleteCoffeeFromCart } =
    useContext(CartContext)

  function addQuantityOfCoffeeOnCart() {
    changeQuantityOfCoffeeOnCart(coffee.title, 1)
  }

  function removeQuantityOfCoffeeOnCart() {
    changeQuantityOfCoffeeOnCart(coffee.title, -1)
  }

  function deleteThisCoffeeFromCart() {
    deleteCoffeeFromCart(coffee.title)
  }

  return (
    <CoffeeCartCardContainer>
      <CoffeeCartCardLeftContainer>
        <div>
          <img src={coffee.img} alt="" />
        </div>
        <CoffeeCartCardMiddleContainer>
          <h3>{coffee.title}</h3>
          <div>
            <CoffeeQuantityInput
              quantity={quantity}
              addQuantity={addQuantityOfCoffeeOnCart}
              removeQuantity={removeQuantityOfCoffeeOnCart}
            />
            <button onClick={deleteThisCoffeeFromCart}>
              <Trash size={16} /> Remove
            </button>
          </div>
        </CoffeeCartCardMiddleContainer>
      </CoffeeCartCardLeftContainer>
      <CoffeeCardCartPrice>
        <p>€{coffee.price}</p>
      </CoffeeCardCartPrice>
    </CoffeeCartCardContainer>
  )
}
