import "./styles.scss";

function OptionWeather({ dataApi }) {
  return (
    <div className="optionWeather__container">
      <div className="optionWeather__container--pollen">
        <h3 className="optionWeather__container--pollen-title">Ressenti</h3>
        <h3>{Math.round(Math.round(dataApi?.main.feels_like))} °</h3>
      </div>

      <div className="optionWeather__container--wind">
        <h3 className="optionWeather__container--wind-title">Vent</h3>
        <h3>{dataApi?.wind.speed * 2} km/h</h3>
      </div>

      <div className="optionWeather__container--humidity">
        <h3 className="optionWeather__container--humidity-title">Humidité</h3>
        <h3>{dataApi?.main.humidity} %</h3>
      </div>
    </div>
  );
}

export default OptionWeather;
