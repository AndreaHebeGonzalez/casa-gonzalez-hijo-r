
export const Preloader = ({ progress }) => {

  return (
    <>
      <div className="overlay"></div>
      <div className= "preloader">
          <span className="introName">{ progress }</span>
            
          <div className="progress-bar-box">
            <div className="progress-bar"></div>
          </div>
      </div>
    </>
  )
}
