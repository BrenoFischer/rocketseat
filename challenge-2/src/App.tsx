import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Catalog } from './components/Catalog'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Header />
        <Intro />
        <Catalog />
        <GlobalStyle />
      </CartContextProvider>
    </ThemeProvider>
  )
}
