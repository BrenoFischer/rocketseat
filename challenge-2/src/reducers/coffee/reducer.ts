import { ActionTypes } from './action'

export interface Coffee {
  img: string
  tags: string[]
  title: string
  text: string
  price: string
}

export interface CoffeeAndQuantity {
  coffee: Coffee
  quantity: number
}

export function coffeesReducer(state: CoffeeAndQuantity[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      return [...state, action.payload.newCoffee]
    default:
      return state
  }
}
