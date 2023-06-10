import { createContext, ReactNode, useReducer, useEffect } from 'react'
import { CoffeeAndQuantity, coffeesReducer } from '../reducers/coffee/reducer'
import {
  addCoffeeToCartAction,
  changeQuantityOfCoffeeOnCartAction,
} from '../reducers/coffee/action'

interface CartContextType {
  coffees: CoffeeAndQuantity[]
  addCoffeeToCart: (newCoffee: CoffeeAndQuantity) => void
  getCoffeesQuantity: () => number
  changeQuantityOfCoffeeOnCart: (
    coffeeTitle: string,
    quantityToChange: number,
  ) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, dispatch] = useReducer(coffeesReducer, [], (initialState) => {
    const storedCoffeesAsJson = localStorage.getItem(
      '@challenge-2:coffees-1.0.0',
    )
    if (storedCoffeesAsJson) {
      return JSON.parse(storedCoffeesAsJson)
    }

    return initialState
  })

  useEffect(() => {
    const coffeesJSON = JSON.stringify(coffees)

    localStorage.setItem('@challenge-2:coffees-1.0.0', coffeesJSON)
  }, [coffees])

  function addCoffeeToCart(newCoffee: CoffeeAndQuantity) {
    dispatch(addCoffeeToCartAction(newCoffee))
  }

  function getCoffeesQuantity() {
    return coffees.length
  }

  function changeQuantityOfCoffeeOnCart(
    coffeeTitle: string,
    quantityToChange: number,
  ) {
    dispatch(changeQuantityOfCoffeeOnCartAction(coffeeTitle, quantityToChange))
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        getCoffeesQuantity,
        changeQuantityOfCoffeeOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
