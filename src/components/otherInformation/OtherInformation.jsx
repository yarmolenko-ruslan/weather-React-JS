import timeConverter from "../../utils/timeConverter";
import "./OtherInformation.css";

const OtherInformation = ({ data }) => {
  const windDirection = data?.wind?.deg;
  return (
    <ul className="card__additional">
      <li className="card__additional-info">
        Ощущается как:{" "}
        {data ? Math.round(data?.main?.feels_like - 273.15) + "°" : "..."}
      </li>
      <li className="card__additional-info">
        Давление:{" "}
        {data
          ? Math.round(data?.main?.pressure * 0.750064) + " мм рт. ст."
          : "..."}
      </li>
      <li className="card__additional-info">
        Время восхода:{" "}
        {data?.sys?.sunrise ? timeConverter(data.sys.sunrise) : "..."}
      </li>
      <li className="card__additional-info">
        Время заката:{" "}
        {data?.sys?.sunset ? timeConverter(data.sys.sunset) : "..."}
      </li>
      <li className="card__additional-info">
        Скорость ветра: {data?.wind?.speed ? data.wind.speed + " м/с" : "..."}
      </li>
      <li className="card__additional-info">
        С порывами до: {data?.wind?.gust ? data.wind.gust + " м/с" : "..."}
      </li>
      <li className="card__additional-info">
        Нап. ветра:{" "}
        {0 < windDirection && windDirection < 90
          ? "Северо-восток"
          : 90 < windDirection && windDirection < 180
          ? "Юго-восток"
          : 180 < windDirection && windDirection < 270
          ? "Юго-запад"
          : 270 < windDirection && windDirection < 360
          ? "Северо-запад"
          : windDirection === 360
          ? "Север"
          : windDirection === 90
          ? "Восток"
          : windDirection === 180
          ? "Юг"
          : windDirection === 270
          ? "Запад"
          : "..."}
      </li>
      <li className="card__additional-info">
        Видимость: {data ? data.visibility / 1000 + " км" : "..."}
      </li>
    </ul>
  );
};

export default OtherInformation;
