import React, { useContext, useRef, useEffect } from "react";
import ElementContext from "../../context/element/elementContext";

const SearchFilter = () => {
  const elementContext = useContext(ElementContext);
  const text = useRef("");

  const { filtered, searchElements } = elementContext;

  useEffect(() => {
    if (filtered === null) {
      text.current = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      searchElements(e.target.value);
    }
  };
  return (
    <form>
      <input type={text} type='text' onChange={onChange} />
    </form>
  );
};

export default SearchFilter;