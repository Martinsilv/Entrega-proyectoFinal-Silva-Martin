import { CardWidget } from "./cardWidget"
import moduleStyle from "./Style.module.css"
export const NavBar = ()=><>
<div className={moduleStyle.navBar}> 
<h1>Tienda H&H</h1>
<ul className={moduleStyle.ul}>
    <li className={moduleStyle.li}><a className={moduleStyle.a} href="#">Inicio</a></li>
    <li className={moduleStyle.li}><a className={moduleStyle.a} href="#">Productos</a></li>
    <li className={moduleStyle.li}><a className={moduleStyle.a} href="#">Contacto</a></li>
</ul>
<CardWidget/>
<span className={moduleStyle.contador}>4</span>
</div> 
</>
  
