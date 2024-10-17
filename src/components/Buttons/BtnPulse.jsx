
export const BtnPulse = () => {

  return (
  <div class="pulse">
    {[...Array(4)].map((_,index) => (
      <span key= { index } style= {{ '--i': `${index + 1}` }}></span>
    ))}  
  </div>
  )
}
