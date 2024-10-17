

export const BtnScroll = ({ showBtnScroll }) => {

  const handleScrollToTop = () => {
    console.log('click en btn')
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
  }


  return (
    <div onClick={ handleScrollToTop } className={`button-scroll ${showBtnScroll ? '':'disappear'}` }>
      <img src="/public/icons/ico-btn-scroll.svg" alt="scroll al menu" />
    </div>
  )
}
