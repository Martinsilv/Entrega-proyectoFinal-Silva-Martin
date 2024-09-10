import { CardWidget } from "./cardWidget"
import moduleStyle from "./Style.module.css"
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
export const NavBar = ()=><>
<div className={moduleStyle.navBar}> 
<h1>Tienda H&H</h1>
<ul className={moduleStyle.ul}>
  <Nav>
    <Nav.Link as={NavLink} to="/" className={moduleStyle.li}>
      Home
    </Nav.Link>
    <Nav.Link as={NavLink} to="/categoryId/hombres" className={moduleStyle.li}>
      Hombres
    </Nav.Link>
    <Nav.Link as={NavLink} to="/categoryId/mujeres" className={moduleStyle.li}>
      Mujeres
    </Nav.Link>
  </Nav>
</ul>
<CardWidget/>

</div> 
</>
  
