import { useState } from "react";
import items from "./data";
import Menu from "./components/Menu";
import Button from "./components/Button";
import "./App.css";
import { useEffect } from "react";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);
  const [data, setData] = useState([]);

  // Seatch Componenent Function
  const structureData = (data) => {
    let structure = [];
    // console.log(data);
    data.map((item) => {
      let strObj = {};
      strObj["date"] = item.date;
      strObj["data"] = data.filter((d) => d.date === item.date);
      if (structure.findIndex((i) => i.date == item.date) === -1) {
        structure.push(strObj);
      }
    });

    // console.log(structure);
    setData(structure);
  };

  useEffect(() => {
    structureData(menuItem);
  }, []);

  const filterData = (query) => {
    if (query.length == 0) {
      structureData(menuItem);
    } else {
      let filter = menuItem.filter(
        (i) =>
          i.name.toLowerCase().includes(query.toLowerCase()) ||
          i.date.includes(query) ||
          i.status == query
      );
      structureData(filter);
    }
    // console.log(filter);
  };

  // Filter button function
  const filter = (button) => {
    if (button === "All") {
      structureData(items);
      return;
    }
    const filterData = items.filter((item) => item.category === button);
    structureData(filterData);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>
          Transaction
          <span> History</span>
        </h1>
      </div>

      <div className="searchCon">
        <input
          type="text"
          className="search"
          placeholder="Search by name or date"
          onChange={(e) => {
            // setQuery(e.target.value);
            filterData(e.target.value);
          }}
        />
      </div>
      <Button button={buttons} filter={filter} />
      <Menu data={data} />
    </div>
  );
}
export default App;
