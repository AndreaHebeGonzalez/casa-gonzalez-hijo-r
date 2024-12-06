import { BtnPulse } from "../../../../components/Buttons/BtnPulse"


export const Hotspots = ({ hotspot, handleHotspot, setRef }) => {
  return (
    <div ref={ (node) => setRef(node, hotspot.id) }  className="hotspot" style={{ top: hotspot.top, left: hotspot.left }} key={ hotspot.id }>
      <div className="hotspot__wrapp">
        <div className="hotspot__btn-pulse" onClick={ () => handleHotspot(hotspot.id) }>
          <BtnPulse />
        </div>
        <div className={ `hotspot__tooltip-wrapp ${hotspot.position === "right" ? `hotspot__tooltip-wrapp--${hotspot.position}` :""} `}>
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
