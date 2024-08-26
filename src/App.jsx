import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar' ;
import { ItemListContainer } from './components/ItemListContainer';
import {ItemDetailContainer} from './components/itemDetailContainer';
//import { ContadorHook } from './components/contador'
import './App.css'
import { useState } from "react";
import { CardContext } from "./components/cartContext/cartContext";
import Carrito from "./components/carrito";
//import { RelojConHook } from './components/reloj-con-hook'


function App() {

const [carrito,setCarrito] =useState([]);

const agregarAlCarrito = (item,count)=>{
  const itemAgregado = ({...item,cantidad:count})

const nuevoCarrito = [...carrito]
const productAgregado = nuevoCarrito.find((prod)=> prod.id === itemAgregado.id);

if(productAgregado){
productAgregado.cantidad += count;   


}else{
  nuevoCarrito.push(itemAgregado)

}
setCarrito(nuevoCarrito);
console.log(carrito );
}

const contadorCarrito = ()=>{
  return carrito.reduce((acc,prod)=> acc + prod.cantidad,0)
}

  return (
    <CardContext.Provider value={{carrito, agregarAlCarrito, contadorCarrito}}>
    <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path="/" element={<ItemListContainer/>} /> 
            <Route path="/category/:id" element={<ItemListContainer/>} /> 
            <Route path="/category/:id/item/:id" element={<ItemDetailContainer/>} /> 
            <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
            <Route path="/carrito" element={<Carrito/>}/>

           
           
            </Routes>
            
           
    </BrowserRouter>
    </CardContext.Provider>
  )
}

export default App
