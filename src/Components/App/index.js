import "./App.scss";

//Components
import Header from "../Header";
import Search from "../Search";
import Temperatures from "../Temperatures";
import OptionWeather from "../OptionWeather";

function App() {
  return (
    <div className="App">
      <Search />
      <Header />
      <Temperatures />
      <OptionWeather />
    </div>
  );
}

export default App;
