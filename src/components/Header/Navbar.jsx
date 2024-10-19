import { Link } from "react-router-dom";
import { NavItem } from "./NavItem"
import { useEffect, useState } from "react";


export const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [showName, setShowName] = useState(window.innerWidth > 1279);

  const handleOpenMenu = () => {
    console.log('click en abrir menu')
    setOpenMenu(openMenu => !openMenu)
  };



  useEffect(() => {

    const handleShowName = () => {
      setShowName(window.innerWidth > 1279)
    };

    window.addEventListener('resize', handleShowName);

    return () => {
      window.removeEventListener('resize', handleShowName);
    }
  }, []);
  

  const navItems = [
    { label: 'INICIO', link: '#' },
    { label: 'NOSOTROS', link: '#' },
    { label: 'PRODUCTOS', link: '#' },
  ]

  return ( 
    <div className="header__barra container-2">
      {
        showName && <div className="header__name">Casa Gonzalez e Hijo</div>
      }
      
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
            <div className="nav__divider"><img src="/public/icons/ico-divider.svg" /></div>
            <div className="nav__item">
              <a className="nav__link" href="#">
                <span>CONTACTO</span>
                <span>CONTACTO</span>
              </a>
            </div>
          </nav>

            {
              !showName && (
                <div className="nav__box-social">
                  <h3 className="nav__name">Casa Gonzalez e Hijo</h3>
                  <div className="nav__icons-social">
                    <img className="nav__ico-whatsapp" src="/public/icons/ico-whatsapp.svg" alt="icono whatsapp" />
                    <img className="nav__ico-whatsapp" src="/public/icons/ico-facebook.svg" alt="icono whatsapp" />
                  </div>
                </div>
              )
              
              
            }
        </div>
      </div>
    </div>
  )
}