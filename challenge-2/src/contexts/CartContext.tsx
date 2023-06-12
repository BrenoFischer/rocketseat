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

interface DeliveryAddressType {
  eircode: string
  street: string
  number: string
  address2?: string
  neighbourhood?: string
  city: string
  state: string
}

export interface PaymentMethodType {
  paymentMethod: 'credit' | 'debit' | 'cash' | null
}

export interface CartFormValuesType {
  addressInformation: DeliveryAddressType
  paymentMethod?: PaymentMethodType
}

interface CartContextType {
  coffees: CoffeeAndQuantity[]
  cartFormValues: CartFormValuesType
  addCoffeeToCart: (newCoffee: CoffeeAndQuantity) => void
  getCoffeesQuantity: () => number
  changeQuantityOfCoffeeOnCart: (
    coffeeTitle: string,
    quantityToChange: number,
  ) => void
  deleteCoffeeFromCart: (coffeeTitle: string) => void
  getTotalCartPrice: () => number
  handleFormSubmit: (data: CartFormValuesType) => void
  changePaymentMethod: (newPaymentMethod: PaymentMethodType) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const cartFormValuesInitialState = {
  addressInformation: {
    eircode: '',
    street: '',
    number: '',
    address2: '',
    neighbourhood: '',
    city: '',
    state: '',
  },
  paymentMethod: {
    paymentMethod: null,
  },
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartFormValues, setCartFormValues] = useState<CartFormValuesType>(
    cartFormValuesInitialState,
  )
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

  function handleFormSubmit(data: CartFormValuesType) {
    console.log(data)
    setCartFormValues({
      ...cartFormValues,
      addressInformation: data.addressInformation,
    })
  }

  function changePaymentMethod(newPaymentMethod: PaymentMethodType) {
    setCartFormValues({ ...cartFormValues, paymentMethod: newPaymentMethod })
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        cartFormValues,
        addCoffeeToCart,
        getCoffeesQuantity,
        changeQuantityOfCoffeeOnCart,
        deleteCoffeeFromCart,
        getTotalCartPrice,
        handleFormSubmit,
        changePaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
