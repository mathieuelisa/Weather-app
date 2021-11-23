import "./styles.scss";
// icons temps
import sun from "../../Img/sun.svg";
import cloud from "../../Img/cloud.svg";
import cloud_drizzle from "../../Img/cloud-drizzle.svg";
import lightning from "../../Img/cloud-lightning.svg";
import cloud_rain from "../../Img/cloud-rain.svg";
import cloud_snow from "../../Img/cloud-snow.svg";
import mist from "../../Img/mist.svg";
import clouds from "../../Img/clouds.svg";
import light_rain from "../../Img/light-rain.svg";
import moon from "../../Img/moon.png";
import nuages from "../../Img/nuages.png";
// Import modules
import { useState, useEffect } from "react";
// Import library
import Fade from "react-reveal/Fade";

function Temperature({ dataApi }) {
  const weatherIcons = {
    "clear sky": sun,
    "few clouds": cloud,
    "scattered clouds": cloud,
    "broken clouds": cloud,
    "shower rain": cloud_drizzle,
    rain: cloud_rain,
    thunderstorm: lightning,
    snow: cloud_snow,
    mist: mist,
    "overcast clouds": clouds,
    "moderate rain": cloud_rain,
    "light rain": light_rain,
  };

  const weatherIconsByNight = {
    "clear sky": moon,
    "few clouds": cloud,
    "scattered clouds": cloud,
    "broken clouds": cloud,
    "shower rain": cloud_drizzle,
    rain: cloud_rain,
    thunderstorm: lightning,
    snow: cloud_snow,
    mist: mist,
    "overcast clouds": clouds,
    "moderate rain": cloud_rain,
    "light rain": light_rain,
  };

  const [imgWeather, setImgWeather] = useState();

  const weatherDescription = dataApi?.weather[0].description;

  useEffect(() => {
    let currentTime = new Date().getHours();
    currentTime < 18
      ? setImgWeather(weatherIcons[weatherDescription])
      : setImgWeather(weatherIconsByNight[weatherDescription]);
  }, [weatherDescription]);

  return (
    <div className="temperature__container">
      <img
        src={imgWeather}
        className="temperature__container--img"
        alt={weatherDescription}
      />
      <img
        src={nuages}
        className="temperature__container--clouds"
        alt="pictures of cloud"
      />

      <h2 className="temperature__container--degree">
        {Math.round(dataApi?.main.temp)}°
      </h2>
      <div className="temperature__secondContainer">
        <Fade left duration={2000}>
          <div className="temperature__secondContainer--min">
            <h3>Min</h3>
            <h3>{Math.round(dataApi?.main.temp_min)}°</h3>
          </div>
        </Fade>

        <Fade right duration={2000}>
          <div className="temperature__secondContainer--max">
            <h3>Max</h3>
            <h3>{Math.round(dataApi?.main.temp_max)}°</h3>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Temperature;
