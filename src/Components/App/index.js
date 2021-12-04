import { useEffect, useState } from "react";

import axios from "axios";

//Components
import Header from "../Header";
import Search from "../Search";
import Temperatures from "../Temperatures";
import OptionWeather from "../OptionWeather";
import Loader from "../Loader";
// Style scss
import "./App.scss";

function App() {
  const [dataApi, setDataApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valueInput, setValueInput] = useState(
    // localstorage me permet de recuperer à l'aide d'une cle "weather_city" la valeur associe si y'en a pas la valeur par defaut sera Paris
    localStorage.getItem("weather_city") || "Paris"
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((response) => {
        setDataApi(response.data);
        setValueInput(valueInput);

        // weather_city stock la valeur
        localStorage.setItem("weather_city", valueInput);
        document.title = "Weather App | " + response.data.name;
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [valueInput]);

  const wallpaperChangement = () =>
    new Date().getHours() > 6 && new Date().getHours() < 19 ? "--isActive" : "";

  return (
    <div className={`App${wallpaperChangement()}`}>
      {/* Faire une 404 */}
      <Search setValueInput={setValueInput} valueInput={valueInput} />
      {loading && <Loader alternative={true} />}
      <Header dataApi={dataApi} setDataApi={setDataApi} />
      <Temperatures dataApi={dataApi} setDataApi={setDataApi} />
      <OptionWeather dataApi={dataApi} setDataApi={setDataApi} />
    </div>
  );
}

export default App;
