

export const AboutItem = ({ title, text, index, setRef }) => {

  return (
    <div ref={ (node) => setRef(node, index + 1) } className="about-s__item-content" >
      <span className="about-s__item-number">{`0${index + 1}`}</span> 
      <span className="about-s__item-title">{title}</span>
      <p className="about-s__item-text">{text}</p>
    </div>
  );
};
