import "./styles.scss";
import img from "../../Img/weather.png";

function Temperature({ dataApi }) {
  return (
    <div className="temperature__container">
      <img className="temperature__container--img" src={img} />
      <h2 className="temperature__container--degree">{dataApi?.main.temp}°</h2>
      <div className="temperature__secondContainer">
        <div className="temperature__secondContainer--min">
          <h3>Min</h3>
          <h3>{dataApi?.main.temp_min}°</h3>
        </div>

        <div className="temperature__secondContainer--max">
          <h3>Max</h3>
          <h3>{dataApi?.main.temp_max}°</h3>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
