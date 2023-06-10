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
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const newCoffeeAlreadyOnCart = state.filter((coffeeAndQuantity) => {
        return (
          coffeeAndQuantity.coffee.title ===
          action.payload.newCoffee.coffee.title
        )
      })

      if (newCoffeeAlreadyOnCart.length) {
        return state.map((coffeeAndQuantity) => {
          console.log(coffeeAndQuantity)
          console.log(action.payload.newCoffee)
          if (
            coffeeAndQuantity.coffee.title ===
            action.payload.newCoffee.coffee.title
          ) {
            return {
              ...coffeeAndQuantity,
              quantity:
                coffeeAndQuantity.quantity + action.payload.newCoffee.quantity,
            }
          } else {
            return coffeeAndQuantity
          }
        })
      } else {
        return [...state, action.payload.newCoffee]
      }
    }

    default:
      return state
  }
}
