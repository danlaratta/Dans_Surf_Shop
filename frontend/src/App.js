import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Accessories from './pages/Accessories'
import Sale from './pages/Sale'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductDetail from './pages/ProductDetail'
import { CartProvider } from './context/CartContext'
import Checkout from './pages/Checkout'


function App() {
  return (
    <CartProvider>
      <Router>
          <Navbar />
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mens' element={<Mens />} />
            <Route path='/womens' element={<Womens />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/product' element={<ProductDetail />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

          <Footer />
        </Router>
    </CartProvider>
    
  )
}

export default App
