import {CartProvider} from './context/CartContext.jsx'
import Layout from './components/layouts/Layout.jsx'
import ItemListContainer from './components/products/ItemListContainer.jsx'
import CartSidebar from './components/cart/CartSidebar.jsx'
import './App.css'

function App() {

  return (
    <>
    <CartProvider>
      <Layout>
      <ItemListContainer />
      <CartSidebar/>
      </Layout>
    </CartProvider>
    </>
  )
}




export default App
