import { useContext } from "react";
import { CardContext } from "./cartContext/cartContext";

const Carrito = () => {

const {carrito} = useContext(CardContext)
 

    return (
        <div>
        <h1>Carrito</h1>
        {
          carrito.map((prod) => (
            <div key={prod.id}><h2>{prod.title}</h2>
            
            </div>
          ))
        }
      </div>
    );
}

export default Carrito;
