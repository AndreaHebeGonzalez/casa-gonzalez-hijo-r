

export const BtnScroll = ({ showBtnScroll, locoScroll  }) => {

  const handleScrollToTop = () => {
    if (locoScroll) {
      locoScroll.scrollTo(0, {
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
  };


  return (
    <div onClick={ handleScrollToTop } className={`button-scroll ${showBtnScroll ? '':'disappear'}` } data-scroll-ignore>
      <img src="/public/icons/ico-btn-scroll.svg" alt="scroll al menu" />
    </div>
  )
}

