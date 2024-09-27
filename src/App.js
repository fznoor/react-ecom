import React from 'react'
import './App.scss'

// components 
import Header from './component/Header'
// pages 

import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'

import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='/products/:routeId' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>Page not found</h1>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App