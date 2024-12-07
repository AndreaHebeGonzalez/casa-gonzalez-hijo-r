
export const Footer = () => {



  
  return (
    <div className='footer section'>
      <div className="footer__container">
        <div className="footer__wrapper">
          
            <div className="footer__branding">
              <div className="footer__logo-wrapper">
                <picture className="footer__logo">
                  <img src="/public/img/logoBlanco.png" alt="imagen del logo"/>
                </picture>
              </div>
            </div>
            <div className="footer__links">
              <div className="footer__categories">
                <a className="footer__link">Fusiles</a>
                <a className="footer__link">Accesorios</a>
                <a className="footer__link">Componentes</a>
              </div>
              <div className="footer__navigation">
                <a className="footer__link">Inicio</a>
                <a className="footer__link">Noticias</a>
                <a className="footer__link">Contacto</a>
              </div>
            </div> 
            <div className="footer__links-fusiles">
              <a href="" className="footer__link">Tacticos</a>
              <a href="" className="footer__link">Varmint</a>
              <a href="" className="footer__link">Clase F</a>
            </div>

            <div className="footer__contact">
              <div className="footer__contact-phone">
                <img src="" alt="icono de telefono"/>
                <div className="footer__phone-details">
                  <p>Lu-Vi de 9:30 a 19hs / Sá de 10:30 a 17hs</p>
                  <a href="">+5411452563</a>
                </div>
              </div>
              <div className="footer__contact-mail">
                <img src="" alt="icono email"/>
                <p>info@casagonzalezehijo.com.ar</p>
              </div>
            </div>
          <div className="footer__copyright">
            <img className="footer__copyright-ico" src="" alt="icono copyright" />
            <div className="footer__separator"></div>
            <p className="footer__copyright-year">2024</p>
            <div className="footer__separator"></div>
            <p className="footer__copyright-name">Casa Gonzalez e Hijo</p>
            <div className="footer__separator"></div>
            <p className="footer__copyright-developer">Desarrollado por AG</p>
          </div>
        </div>
      </div>
    </div>
  )
}
