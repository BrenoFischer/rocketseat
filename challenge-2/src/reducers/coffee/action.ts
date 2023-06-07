import { CoffeeAndQuantity } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
}

export function addCoffeeToCartAction(newCoffee: CoffeeAndQuantity) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}
