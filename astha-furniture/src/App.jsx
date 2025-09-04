import { useState } from 'react'
import './App.scss'
import Footer from './components/common/Footer'
import LandingPage from './pages/LandingPage'
import ProductPage from './components/common/ProductPage'

function App() {

  return (
    <>
      <LandingPage />
      {/* <ProductPage /> */}
      <Footer />
    </>
  )
}

export default App
