import { CardWidget } from "./cardWidget"
import moduleStyle from "./Style.module.css"
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
export const NavBar = ()=><>
<div className={moduleStyle.navBar}> 
<h1>Tienda H&H</h1>
<ul className={moduleStyle.ul}>

       <Nav>
        <Nav.Link as={NavLink} to={"/"} > <li className={moduleStyle.li}><a className={moduleStyle.a}>Home</a></li></Nav.Link>
        <Nav.Link as={NavLink} to={"/category/hombres"} >  <li className={moduleStyle.li}><a className={moduleStyle.a} >Hombres</a></li></Nav.Link>
        <Nav.Link as={NavLink} to={"/category/mujeres"} > <li className={moduleStyle.li}><a className={moduleStyle.a} >Mujeres</a></li></Nav.Link>
        </Nav>
</ul>
<CardWidget/>

</div> 
</>
  
