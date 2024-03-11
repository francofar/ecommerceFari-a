import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemCount from "./components/ItemCount/ItemCount.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos'/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App