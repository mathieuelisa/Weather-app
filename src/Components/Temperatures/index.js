import "./styles.scss";

// icons temps
import sun from "../../Img/sun.svg";
import cloud from "../../Img/cloud.svg";
import cloud_drizzle from "../../Img/cloud-drizzle.svg";
import lightning from "../../Img/cloud-lightning.svg";
import cloud_rain from "../../Img/cloud-rain.svg";
import cloud_snow from "../../Img/cloud-snow.svg";
import wind from "../../Img/wind.svg";
import feather from "../../Img/feather.svg";

import { useState, useEffect } from "react";

function Temperature({ dataApi }) {
  // const [imgWeather, setImgWeather] = useState({
  //   clearSky: sun,
  //   fewClouds: cloud,
  //   showerRain: cloud_drizzle,
  //   rain: cloud_rain,
  //   snow: cloud_snow,
  //   thunderstorm: cloud_lightning,
  // });

  // 4 ème methode
  const weatherIcons = {
    "clear sky": sun,
    "few clouds": cloud,
    "scattered clouds": cloud,
    "broken clouds": wind,
    "shower rain": cloud_drizzle,
    rain: cloud_rain,
    thunderstorm: lightning,
    snow: cloud_snow,
    mist: feather,
    "overcast clouds": feather,
  };
  const [imgWeather, setImgWeather] = useState();

  const weatherDescription = dataApi?.weather[0].description;

  useEffect(() => {
    setImgWeather(weatherIcons[weatherDescription]);
  }, [weatherDescription]);

  return (
    <div className="temperature__container">
      <img
        src={imgWeather}
        className="temperature__container--img"
        alt={weatherDescription}
      />

      <h2 className="temperature__container--degree">
        {Math.round(dataApi?.main.temp)}°
      </h2>
      <div className="temperature__secondContainer">
        <div className="temperature__secondContainer--min">
          <h3>Min</h3>
          <h3>{Math.round(dataApi?.main.temp_min)}°</h3>
        </div>

        <div className="temperature__secondContainer--max">
          <h3>Max</h3>
          <h3>{Math.round(dataApi?.main.temp_max)}°</h3>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
