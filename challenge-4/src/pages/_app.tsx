import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Handbag } from "@phosphor-icons/react";

import logoImg from '../assets/logo.svg'
import { Container, Header, IconContainer } from '../styles/pages/app';
import Image from 'next/image';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <IconContainer>
          <Handbag size={24} />
        </IconContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
    
  ) 
}
