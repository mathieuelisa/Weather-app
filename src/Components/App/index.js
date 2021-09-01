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
  // Get element of the API
  const [dataApi, setDataApi] = useState();
  // Configure the country
  const [valueInput, setValueInput] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((response) => {
        setDataApi(response.data);

        console.log(valueInput);
        setValueInput(valueInput);
        document.title = response.data.name;
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [valueInput]);

  return (
    <div className="App">
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
