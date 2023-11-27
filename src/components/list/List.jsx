import Card from "../card/Card";
import "./list.css";

function List({ value }) {
  return (
    <div className="list">
      <Card value={value} />
    </div>
  );
}

export default List;
