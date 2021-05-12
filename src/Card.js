import React, { useRef, useEffect } from "react";

const Card = (props) => {
  const elementRef = useRef(null);

  useEffect( () => {
    // assign non scalar props
    elementRef.current.cardTags = props.cardTags;

    // listen for custom events
    elementRef.current.addEventListener('tagClick', $event => {
      props.tagClick($event);
    });

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