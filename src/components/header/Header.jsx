import { ImLocation } from "react-icons/im";
import { month } from "../../utils/constants";
import "./header.css";

const Header = ({ data }) => {
  return (
    <div className="card__header">
      <div className="card__header-container">
        <ImLocation />
        <p className="card__header-city">
          {data?.name ? data.name : "Загрузка..."}
        </p>
      </div>
      <p className="card__date">
        {`
    ${new Date().getDate()} 
    ${month[new Date().getMonth()]} 
    ${new Date().getFullYear()}`}
      </p>
    </div>
  );
};

export default Header;
