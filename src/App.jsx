import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart.jsx"
import Checkout from "./components/Checkout.jsx"
import ModalCheckout from "./components/ModalCheckout.jsx"


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/modalcheckout" element={<ModalCheckout />} />

      </Routes>  
    </BrowserRouter>
  );
}

export default App;
