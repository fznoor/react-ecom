import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { lazy, Suspense } from 'react'

import Header from './components/Header'

import Home from './pages'
const Product = lazy(() => import('./pages/product'))
const Cart = lazy(() => import('./pages/cart'))


const App = () => {
    return (
        <HashRouter>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<h1>Page Not Found 404</h1>} />
                    </Route>
                </Routes>
            </Suspense>
        </HashRouter>
    )
}

export default App