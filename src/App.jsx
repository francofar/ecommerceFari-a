import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemCount from "./components/ItemCount/ItemCount.jsx"
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx"
import { CartProvider } from "./context/CartContext.jsx"



function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting ='Bienvenidos'/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer greeting='Categorias'/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
        </>
  )
}

export default App