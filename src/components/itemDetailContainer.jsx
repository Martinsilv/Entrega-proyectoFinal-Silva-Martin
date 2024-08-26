import {  useEffect, useState ,useContext} from "react"
import { useParams } from "react-router-dom";
import {  Container } from "react-bootstrap";
import data from "../data/mock.json"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import moduleStyle from "./Style.module.css"
import { CardContext } from "./cartContext/cartContext";

export function ItemDetailContainer (){
    const [item,setItem]= useState(null);
    const [loading,setLoading]= useState(true);
    const [count,setCount]=useState(1)
    const {carrito,agregarAlCarrito } = useContext(CardContext)
    console.log(carrito)
const { id } = useParams();
    useEffect(()=>{
  
    new Promise((resolve)=>{
        setTimeout(()=>{ resolve(data)},2000) 
    })
    .then((response)=>{
        
            const finded = response.find((i)=> i.id === Number(id));
            setItem(finded)
      })
    .finally(()=>setLoading(false))





},[id])
if (loading) return <div className={moduleStyle.center}> <div className={moduleStyle.loader}></div> </div>


const handleSumar =()=>{
  item.stock > count && setCount(count +1)
}
const handleRestar =()=>{
  count > 1 && setCount(count -1)
}






    return<>
    <Container>
      <Card className="mb-3" style={{width:'100%',marginTop:'3rem',height:'30rem' }}>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img src={item.image} className="img-fluid rounded-start"  style={{height:'30rem' }} alt={item.id} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.detalle}
              </Card.Text>
              <Card.Text>
                <small className="text-body-secondary">Cantidad disponible: {item.stock}</small>
              </Card.Text>
              <button className="custom-btn btn-1"onClick={handleSumar}>+</button>
              <Card.Text>
                {count}
              </Card.Text> 
              <button className="custom-btn btn-1" onClick={handleRestar}>-</button>
              <Button variant="primary" onClick={()=>{agregarAlCarrito(item,count)}}>Añadir al carrito</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
</>
}