
export const BtnPulse = () => {

  return (
  <div className="pulse">
    {[...Array(2)].map((_,index) => (
      <span key= { index } style= {{ '--i': `${index + 1}` }}></span>
    ))}  
  </div>
  )
}
