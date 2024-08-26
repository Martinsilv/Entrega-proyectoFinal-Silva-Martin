import carrito from "../assets/wired-outline-146-trolley.png"
import { Link } from "react-router-dom"
import moduleStyle from "./Style.module.css"
import { useContext } from "react"
import { CardContext } from "./cartContext/cartContext"
export const CardWidget = ()=>{

const{contadorCarrito} = useContext(CardContext)

    return(
<div>
    <Link to="/carrito"><img style={{width:"50px",height:"50px"}} src={carrito} alt="carritoDeCompras" />
    <span className={moduleStyle.contador}>{contadorCarrito()}</span>
    </Link>

</div>
    )
}
