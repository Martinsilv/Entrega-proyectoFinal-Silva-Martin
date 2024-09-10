import { useContext } from "react";
import { CardContext } from "./cartContext/cartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const Carrito = () => {

const {carrito,totalCarrito, vaciarCarrito} = useContext(CardContext)
 
const eliminarTodo = ()=>{
    vaciarCarrito()
} 
    return (
        <div>
        <h1>Carrito</h1>
        {
          carrito.map((prod) => (
            <div key={prod.id}>
<Card>
        <Card.Header  style={{backgroundColor:'#ddddddee' }}><h2 >{prod.title}</h2></Card.Header>
   <Card.Body>
        <Card.Title><h5>Precio por unidad:{prod.price}us</h5></Card.Title>
        <Card.Text>
            <small className="text-body-secondary">Cantidad: {prod.stock}</small>
        </Card.Text>
        <Card.Text>
        <h5>total: {prod.price*prod.cantidad}us</h5>
        </Card.Text>
  </Card.Body>
</Card>
            </div>
          ))
        }
       {carrito.length > 0 ?
      <>
       <h2>total de la compra: {totalCarrito()}us</h2>
        <Button variant="danger" style={{margin:'25px'}} onClick={eliminarTodo}>Vaciar Carrito 🅧</Button>
        <Link  to="/chekout"><Button variant="success">finalizarcompra</Button></Link>
        </>:
        <h2>El Carrito esta vacio</h2>
    }
      </div>
    );
}

export default Carrito;
