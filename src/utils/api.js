const api = (value) => {
  const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b89118e6ec3e416f17da810134db8c8d&lang=ru`)
    .then((data) => data.json())

  return data;
}

export { api };