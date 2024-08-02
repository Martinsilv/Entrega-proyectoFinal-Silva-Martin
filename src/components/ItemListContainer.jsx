// eslint-disable-next-line react/prop-types
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import data from "../data/mock.json"

export function ItemListContainer (){
    const [items,setItem]= useState([]);
    const [loading,setLoading]= useState(true);

const { id } = useParams();
    useEffect(()=>{
  
    new Promise((resolve)=>{
        setTimeout(()=>{ resolve(data)},2000) 
    }).then((response)=>{
        if(!id){  setItem(response)

        }else{
            const filters = response.filter((i)=> i.category === id);
            setItem(filters)
        }
        
        
      })
    .finally(()=>setLoading(false))
},[id])
if (loading) return "wait..."
   




    return<>

<Container>
{items.map((i)=>(
    
 <Card key={i.id} style={{ width: '15rem' }}>
 <Card.Img variant="top" src={i.image} />
 <Card.Body>
   <Card.Title>{i.title}</Card.Title>
   <Card.Text>
    {i.detalle}
   </Card.Text>
   <Card.Text>
    <h4>{i.price}us</h4>
   </Card.Text>
   <Link to={`./item/${i.id}`}>
   <Button variant="primary">detalles</Button>
   </Link>
 </Card.Body>
</Card>

))};

</Container>
</>
}