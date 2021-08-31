import { useEffect, useState } from "react";

import axios from "axios";

//Components
import Header from "../Header";
import Search from "../Search";
import Temperatures from "../Temperatures";
import OptionWeather from "../OptionWeather";

// Style scss
import "./App.scss";

function App() {
  // Get element of the API
  const [dataApi, setDataApi] = useState();

  // Configure the country
  const [countryValue, setCountryValue] = useState("Paris");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryValue}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((response) => {
        const res = response.data;
        setDataApi(response.data);
      });
  }, []);

  return (
    <div className="App">
      <Search setCountryValue={setCountryValue} countryValue={countryValue} />
      <Header />
      <Temperatures />
      <OptionWeather />
    </div>
  );
}

export default App;
