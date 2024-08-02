import {BrowserRouter,Route,Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import {ItemDetailContainer} from './components/itemDetailContainer'
//import { ContadorHook } from './components/contador'
import './App.css'
//import { RelojConHook } from './components/reloj-con-hook'


function App() {


  return (
    <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path="/" element={<ItemListContainer/>} /> 
            <Route path="/category/:id" element={<ItemListContainer/>} /> 
            <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
           
           
            </Routes>
            
           
    </BrowserRouter>
  )
}

export default App
