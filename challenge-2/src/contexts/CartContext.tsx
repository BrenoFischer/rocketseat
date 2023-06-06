import { createContext, useState, ReactNode } from 'react'
import { Coffee } from '../reducers/coffee/reducer'

interface CoffeeAndQuantity {
  coffee: Coffee
  quantity: number
}

interface CartContextType {
  coffees: CoffeeAndQuantity[]
  addCoffeeToCart: (newCoffee: CoffeeAndQuantity) => void
  getCoffeesQuantity: () => number
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeAndQuantity[]>([])

  function addCoffeeToCart(newCoffee: CoffeeAndQuantity) {
    setCoffees((state) => [...state, newCoffee])
  }

  function getCoffeesQuantity() {
    return coffees.length
  }

  return (
    <CartContext.Provider
      value={{ coffees, addCoffeeToCart, getCoffeesQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
