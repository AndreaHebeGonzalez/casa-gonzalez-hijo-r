import { Link } from "react-router-dom"

export const Footer = () => {

  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__column-first">
            <Link to="/" className="footer__logo">
              <img src="/img/logol.webp" alt="Logo de la empresa"/>
            </Link>
            <div className="footer__social">
              <a className="footer__ico-social" href="https//facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/ico-facebook.svg" alt="icono de facebook"/>
              </a>
              <a className="footer__ico-social" href="https//whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/ico-whatsapp.svg" alt="icono de whatsapp" />
              </a>
            </div>
          </div>
          <div className="footer__column-second">
            <h3 className="footer__column-title">Productos</h3>
            <div className="footer__categories">
              <Link to="/" className="footer__link">Fusiles</Link>
              <Link to="/" className="footer__link">Accesorios</Link>
              <Link to="/" className="footer__link">Componentes</Link>
            </div>
          </div> 
          <div className="footer__column-third">
            <div className="footer__navigation">
              <Link to="/" className="footer__link footer__link--nav">Inicio</Link>
              <Link to="/" className="footer__link footer__link--nav">Noticias</Link>
              <Link to="/" className="footer__link footer__link--nav">Contacto</Link>
            </div>
          </div>
          <div className="footer__column-fourth">
            <h3 className="footer__column-title">Datos de contacto</h3>
            <div className="footer__contact-phone">
              <img className="footer__ico-phone" src="/icons/ico-phone.svg" alt=""/>
              <div className="footer__phone-details">
                <p >Lu-Vi de 9:30 a 19hs / Sá de 10:30 a 17hs</p>
                <a href="tel:+5411452563">+5411452563</a>
              </div>
            </div>
            <div className="footer__contact-mail">
              <img className="footer__ico-email" src="/icons/ico-light--email.svg" alt=""/>
              <p>info@casagonzalezehijo.com.ar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright-container">
            <img className="footer__copyright-ico" src="/icons/ico-copyright-blanco.svg" alt="icono copyright" />
            <div className="footer__separator"></div>
            <p className="footer__copyright-year">2024</p>
            <div className="footer__separator"></div>
            <p className="footer__copyright-name">Casa Gonzalez e Hijo</p>
            <div className="footer__separator"></div>
            <p className="footer__copyright-developer">Desarrollado por AG</p>
        </div>
      </div>
    </div>
  )
}


/* 
noopener

Mejora la seguridad y el rendimiento al prevenir que la página nueva abierta con target="_blank" pueda acceder a la página que la creó a través de window.opener.
¿Por qué es importante?
Sin noopener, la nueva página puede ejecutar código JavaScript malicioso que afecte la página original (por ejemplo, cambiar su ubicación o robar datos).
noreferrer

Previene que el navegador envíe el encabezado HTTP Referer cuando el enlace se abre, ocultando la URL de la página de origen.
¿Por qué usarlo?
Esto es útil para mantener privacidad si no quieres que la página de destino sepa de dónde provienen los visitantes.


*/