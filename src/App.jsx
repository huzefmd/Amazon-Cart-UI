import React from 'react'
import AmazonStyleCart from './components/AmazonStyleCart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WishList from './components/WishList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WishList />} />
        <Route path='/cart' element={ <AmazonStyleCart/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
