import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart.jsx"


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
