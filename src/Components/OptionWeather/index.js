import "./styles.scss";

function OptionWeather() {
  return (
    <div className="optionWeather__container">
      <div className="optionWeather__container--pollen">
        <h3 className="optionWeather__container--pollen-title">Pollen</h3>
        <h3>70%</h3>
      </div>

      <div className="optionWeather__container--wind">
        <h3 className="optionWeather__container--wind-title">Vent</h3>
        <h3>70km/h</h3>
      </div>

      <div className="optionWeather__container--humidity">
        <h3 className="optionWeather__container--humidity-title">Humidité</h3>
        <h3>20%</h3>
      </div>
    </div>
  );
}

export default OptionWeather;
