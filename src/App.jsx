import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar' ;
import { ItemListContainer } from './components/ItemListContainer';
import {ItemDetailContainer} from './components/itemDetailContainer';
import './App.css'
import Carrito from "./components/carrito";
import { CartProvider } from "./components/cartContext/cartContext";
import { Checkout } from "./components/checkout";


function App() {



  return (
   <CartProvider>
    <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path="/" element={<ItemListContainer/>} /> 
            <Route path="/categoryId/:id" element={<ItemListContainer/>} /> 
            <Route path="/categoryId/:id/item/:id" element={<ItemDetailContainer/>} /> 
            <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/chekout" element={<Checkout/>}/>

           
           
            </Routes>
            
           
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
