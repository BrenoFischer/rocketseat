import { CoffeeAndQuantity } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  CHANGE_QUANTITY_OF_COFFEE_ON_CART = 'CHANGE_QUANTITY_OF_COFFEE_ON_CART',
  DELETE_COFFEE_FROM_CART = 'DELETE_COFFEE_FROM_CART',
}

export function addCoffeeToCartAction(newCoffee: CoffeeAndQuantity) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function changeQuantityOfCoffeeOnCartAction(
  coffeeTitle: string,
  quantityToChange: number,
) {
  return {
    type: ActionTypes.CHANGE_QUANTITY_OF_COFFEE_ON_CART,
    payload: {
      coffeeTitle,
      quantityToChange,
    },
  }
}

export function deleteCoffeeFromCartAction(coffeeTitle: string) {
  return {
    type: ActionTypes.DELETE_COFFEE_FROM_CART,
    payload: {
      coffeeTitle,
    },
  }
}
