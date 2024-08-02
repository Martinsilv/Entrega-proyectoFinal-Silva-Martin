import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import data from "../data/mock.json"
import Card from 'react-bootstrap/Card';
export function ItemDetailContainer (){
    const [item,setItem]= useState(null);
    const [loading,setLoading]= useState(true);

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
if (loading) return "cargando..."
   




    return<>

<Container>

      <Card style={{ width:'60rem', margin:'20px',marginLeft:'10rem'}}>
        <Card.Img variant="top"  src={item.image}style={{ width:'40rem', margin:'10px',paddingLeft:'20rem'}}  />
        <Card.Body>
        <Card.Text>
          <h1>{item.title}</h1>
          </Card.Text>
          <Card.Text>
          <p>{item.detalle}</p>
          </Card.Text>
          <Card.Text>
          {item.category}
          </Card.Text>
          <Card.Text>
          <h4>{item.price}us</h4>
          </Card.Text>
        </Card.Body>
      </Card>

</Container>
</>
}