import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moduleStyle from "./Style.module.css";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";

export function ItemListContainer() {
    const [items, setItem] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const db = getFirestore();
    const { id } = useParams();

    useEffect(() => {
        const productosRef = !id ? collection(db, "item")
            : query(collection(db, "item"), where("categoryId", "==", id));
        
        getDocs(productosRef).then((resp) => {
            setItem(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setLoading(false); // Finaliza la carga
        });
    }, [id]);

    if (loading) {
        return <div className={moduleStyle.center}> <div className={moduleStyle.loader}></div> </div>
    }

    return (
        <Container style={{ margin: '0%' }}>
            <div className={moduleStyle.container}>
                {items.map((i) => (
                    <Card key={i.id} style={{ width: '20rem', height: '33rem' }}>
                        <Card.Img variant="top" src={i.image} style={{ height: '270px' }} />
                        <Card.Body style={{ height: '5rem' }}>
                            <Card.Title>{i.title}</Card.Title>
                            <Card.Text>{i.categoryId}</Card.Text>
                            <Card.Text>
                                <h4>{i.price}us</h4>
                            </Card.Text>
                            <Link to={`./item/${i.id}`}>
                                <Button variant="primary">detalles</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}