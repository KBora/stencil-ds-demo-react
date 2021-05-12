import React, { useRef, useEffect } from "react";

const Hexagram = ({ lines }) => {
  const elementRef = useRef(null);

  useEffect( () => {
    elementRef.current.lines = lines;
  }, [lines]);

  // Web component
  return <twds-hexagram ref={elementRef}></twds-hexagram>
};

export default Hexagram;