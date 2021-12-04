import { useState, useRef, useEffect } from "react";

import "./styles.scss";

function Search({ setValueInput }) {
  const [inputData, setInputData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setValueInput(inputData);
    setInputData("");
  }

  function handleChange(event) {
    setInputData(event.target.value);
  }

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="searchBar__container" onSubmit={handleSubmit}>
      <input
        className="searchBar__container--title"
        type="text"
        placeholder="Select Country"
        onChange={handleChange}
        value={inputData}
        ref={inputRef}
      />
    </form>
  );
}

export default Search;
