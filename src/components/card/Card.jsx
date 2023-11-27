import "./card.css";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import OtherInformation from "../otherInformation/OtherInformation";
import CurrentWeather from "../currentWeather/CurrentWeather";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Card({ value }) {
  const [data, setData] = useState("");

  useEffect(() => {
    api(value).then((data) => setData(data));
  }, [value]);

  return (
    <div className="card">
      <Header data={data} />
      <CurrentWeather data={data} />
      <OtherInformation data={data} />
      <Footer />
    </div>
  );
}

export default Card;
