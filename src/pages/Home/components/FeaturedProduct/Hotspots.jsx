

export const Hotspots = ({ hotspot, handleHotspot, setRef, position }) => {
  return (
    <div ref={ (node) => setRef(node, hotspot.id) }  className="hotspot" style={{ top: hotspot.top, left: hotspot.left }} key={ hotspot.id }>
      <div className="hotspot__wrapp">
        <button className="hotspot__btn-pulse" onClick={ () => handleHotspot(hotspot.id) }></button>
        <div className={ `hotspot__line-one hotspot__line-one--${position}` }></div>
        <div className={ `hotspot__line-two hotspot__line-two--${position}` }></div>
        <div className={ `hotspot__tooltip-wrapp ${position === "right" ? `hotspot__tooltip-wrapp--${position}` :""} `}>
          <div className="hotspot__tooltip">
            <div className="hotspot__tooltip-text">
              <p>{ hotspot.description }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
