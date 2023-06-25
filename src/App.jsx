import './App.css'
import Layout from './components/layout'
import Homepage from './pages/homepage'
import Shop from './pages/shop'
import Auth from './pages/auth'
import Details from './pages/details'
import Cart from './pages/cart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShopContext from './components/shopcontext'

function App() {
  return (
    <>
    <ShopContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path='shop'  element={<Shop/>}/>
          <Route path='login' element={<Auth/>}/>
          <Route path='details' element={<Details />}/>
          <Route path='cart' element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </ShopContext>
    </>
  );
}

export default App
