import useScrollReveal from './components/hooks/useScrollReveal.js'
import {CartProvider} from './context/CartContext.jsx'
import Layout from './components/layouts/Layout.jsx'
import ItemListContainer from './components/products/ItemListContainer.jsx'
import CartSidebar from './components/cart/CartSidebar.jsx'
import Toast from './components/cart/Toast.jsx'
import './App.css'

function App() {
  useScrollReveal();

  return (
    <>
    <CartProvider>
      <Layout>
      <ItemListContainer />
      <CartSidebar/>
      <Toast />
      </Layout>
    </CartProvider>
    </>
  )
}




export default App;
