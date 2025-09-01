import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import LandingPage from './pages/LandingPage'
import ProductPage from './components/common/ProductPage'

function App() {

  return (
    <>
      <Header />
      <LandingPage />
      {/* <ProductPage /> */}
      <Footer />
    </>
  )
}

export default App
