import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container, Header, IconContainer } from '../styles/pages/app';
import { CartProvider } from '../contexts/CartContext';
import HeaderComponent from '../components/Header';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <HeaderComponent />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
    
  ) 
}
