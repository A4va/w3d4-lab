import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './components/Nav'
import Carousels from './components/Carousels'
import Cards from './components/Cards'
import Footer from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <App/>
    <Nav/>
    <Carousels/>
    <Cards/>
    <Footer/>
  </ChakraProvider>
)
