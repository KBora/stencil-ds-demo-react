import React, { useRef, useEffect } from "react";

const Hexagram = (props) => {
  const elementRef = useRef(null);

  useEffect( () => {
    debugger;
    elementRef.current.lines = props.lines;
  }, [props]);

  // Web component
  return <twds-hexagram ref={elementRef}>{props.children}</twds-hexagram>
};

export default Hexagram;