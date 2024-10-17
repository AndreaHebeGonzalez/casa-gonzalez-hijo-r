import { Link } from "react-router-dom";
import { NavItem } from "./NavItem"
import { useState } from "react";


export const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    console.log('click en abrir menu')
    setOpenMenu(openMenu => !openMenu)
  };

  const navItems = [
    { label: 'INICIO', link: '#' },
    { label: 'NOSOTROS', link: '#' },
    { label: 'PRODUCTOS', link: '#' },
  ]

  return ( 
    <div className="header__barra container-2">
      <div className="header__name">Casa Gonzalez e Hijo</div>
      
      <figure className="header__logo">
        <img className="header__logo-img" src="/public/img/logob.png" alt="logo" />
      </figure>

      <div className="header__menu"> 
        <div onClick= { handleOpenMenu } className="header__menu-abrir"> 
          <img className="header__menu-icono" src="/public/icons/menu-abrir.svg" alt="Icono menu" />
        </div>
        <div className= "header__menu-contenido" style={{ transform: openMenu ? 'translateX(0)':'' }} > 
          <div className="header__menu-top">
            <div onClick= { handleOpenMenu } className="header__menu-cerrar">
              <img className="header__menu-icono" src="/public/icons/menu-cerrar.svg" alt="Icono menu" />
            </div>
          </div>
          <nav className="nav">
            <ul className="nav__lista"> 
              { navItems.map( (item) => 
                <NavItem key={ item.label } {...item} />) 
              }
            </ul>
            <div><img src="/public/icons/ico-divider.svg" alt="divider" /></div>
            <a className="nav__link" href="#">CONTACTO</a>
          </nav>
        </div>
      </div>
    </div>
  )
}