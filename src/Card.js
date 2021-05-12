import React, { useRef, useEffect } from "react";

const Card = (props) => {
  const elementRef = useRef(null);

  useEffect( () => {
    elementRef.current.tags = props.tags;
  }, [props]);

  // Web component
  return (
    <twds-card
      card-image-url={props.cardImageUrl}
      card-image-alt={props.cardImageAlt}
      card-title={props.cardTitle}
      card-text={props.cardText}
      ref={elementRef}>{props.children}
    </twds-card>
  )
};

export default Card;