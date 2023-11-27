import { useState } from "react";
import "./form.css";

const Form = ({ setValue }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setValue(city);
  };

  return (
    <form className="form" onSubmit={handleClick}>
      <input
        className="form__input"
        type="text"
        name="city"
        onChange={handleChange}
        placeholder="Введите город"
        value={city || ''}
        required
      />
      <button className="form__btn" type="submit"></button>
    </form>
  );
};

export default Form;
