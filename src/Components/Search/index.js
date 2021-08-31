import { useState } from "react";

import "./styles.scss";

function Search({ setCountryValue }) {
  const [inputData, setInputData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("New country added");
    setCountryValue(inputData);
  }

  function handleChange(event) {
    setInputData(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form className="searchBar__container" onSubmit={handleSubmit}>
      <input
        className="searchBar__container--title"
        type="text"
        placeholder="Select Country"
        onChange={handleChange}
        value={inputData}
      />
    </form>
  );
}

export default Search;
