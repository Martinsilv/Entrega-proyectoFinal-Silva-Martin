import { useContext, useState } from "react";
import { CardContext } from "./cartContext/cartContext";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import { collection, addDoc, getFirestore } from "firebase/firestore";


export const Checkout = () => {
    const [pedidoId, setPedido] = useState("");
    const db = getFirestore();
    const { carrito, totalCarrito, vaciarCarrito } = useContext(CardContext);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const email = watch("email"); 
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalCarrito()
        };

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedido(doc.id);
                vaciarCarrito();
            });
    };

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Su número de pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="form" onSubmit={handleSubmit(comprar)}>
                <input 
                    type="text" 
                    placeholder="Ingresa tu nombre" 
                    {...register("nombre", { required: true })} 
                />
                {errors.nombre && <span>Este campo es obligatorio</span>}
                
                <input 
                    type="email" 
                    placeholder="Ingresa tu e-mail" 
                    {...register("email", { required: true })} 
                />
                {errors.email && <span>Este campo es obligatorio</span>}
                
                <input 
                    type="email" 
                    placeholder="Confirma tu e-mail" 
                    {...register("emailConfirm", {
                        required: true,
                        validate: (value) => value === email || "Los correos no coinciden"
                    })} 
                />
                {errors.emailConfirm && <span>{errors.emailConfirm.message}</span>}
                
                <input 
                    type="text" 
                    placeholder="Ingresa tu teléfono" 
                    {...register("telefono", { required: true })} 
                />
                {errors.telefono && <span>Este campo es obligatorio</span>}
                
                <Button variant="success" type="submit">Comprar</Button>
            </form>
        </div>
    );
};




 
