import {
  createContext,
  ReactNode,
  useReducer,
  useEffect,
  useState,
} from 'react'
import { CoffeeAndQuantity, coffeesReducer } from '../reducers/coffee/reducer'
import {
  addCoffeeToCartAction,
  changeQuantityOfCoffeeOnCartAction,
  deleteCoffeeFromCartAction,
} from '../reducers/coffee/action'

export interface DeliveryAddressType {
  eircode: string
  street: string
  number: string
  address2?: string
  neighbourhood?: string
  city: string
  state: string
}

interface PaymentMethodType {
  paymentMethod: 'credit' | 'debit' | 'cash' | null
}

interface CartContextType {
  coffees: CoffeeAndQuantity[]
  addressInformation: DeliveryAddressType
  paymentMethod: PaymentMethodType
  addCoffeeToCart: (newCoffee: CoffeeAndQuantity) => void
  getCoffeesQuantity: () => number
  changeQuantityOfCoffeeOnCart: (
    coffeeTitle: string,
    quantityToChange: number,
  ) => void
  deleteCoffeeFromCart: (coffeeTitle: string) => void
  getTotalCartPrice: () => number
  handleFormSubmit: (data: DeliveryAddressType) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const addressInformationInitialState = {
  eircode: '',
  street: '',
  number: '',
  address2: '',
  neighbourhood: '',
  city: '',
  state: '',
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [addressInformation, setAddressInformation] =
    useState<DeliveryAddressType>(addressInformationInitialState)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>({
    paymentMethod: null,
  })
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

  function deleteCoffeeFromCart(coffeeTitle: string) {
    dispatch(deleteCoffeeFromCartAction(coffeeTitle))
  }

  function getTotalCartPrice() {
    return coffees.reduce((acc, coffeeAndQuantity) => {
      return (
        acc +
        parseFloat(coffeeAndQuantity.coffee.price) * coffeeAndQuantity.quantity
      )
    }, 0)
  }

  function handleFormSubmit(data: DeliveryAddressType) {
    console.log(data)
    setAddressInformation(data)
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        addressInformation,
        paymentMethod,
        addCoffeeToCart,
        getCoffeesQuantity,
        changeQuantityOfCoffeeOnCart,
        deleteCoffeeFromCart,
        getTotalCartPrice,
        handleFormSubmit,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
