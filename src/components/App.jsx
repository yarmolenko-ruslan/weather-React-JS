import { useState } from "react";
import "./App.css";
import Form from "./form/Form";
import List from "./list/List";

function App() {
  const [value, setValue] = useState("krasnoyarsk");

  return (
    <div className="app">
      <Form setValue={setValue} />
      <List value={value} />
    </div>
  );
}

export default App;
