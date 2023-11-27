import "./currentWeather.css";
import { day } from "../../utils/constants";

const CurrentWeather = ({ data }) => {
  const imageWeather = data?.weather?.[0]?.icon;

  return (
    <div className="card__current">
      <div className="card__info">
        <p className="card__info-day">{day[new Date().getDay()]}</p>
        <p className="card__info-humidity">
          Влажность: {data ? data?.main?.humidity + "%" : "Загрузка..."}
        </p>
        <p className="card__info-avg">
          Мин: {data ? Math.round(data.main?.temp_min - 273.15) + "°" : "..."}{" "}
          Maкс: {data ? Math.round(data.main?.temp_max - 273.15) + "°" : "..."}
        </p>
        <p className="card__info-temp">
          {data ? Math.round(data.main?.temp - 273.15) + "°" : "..."}
        </p>
      </div>
      <div className="card__image">
        <p className="card__image-descr">{data?.weather?.[0]?.description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${imageWeather}@2x.png`}
          alt={data?.weather?.[0]?.description}
          className="card__img"
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
