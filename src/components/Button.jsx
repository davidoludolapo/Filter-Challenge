import React from "react";

function Button({ button, filter }) {
  const makeStyles = (cat) => {
    if (cat === "All") {
      return {
        background: "rgb(3, 44, 156)",
      };
    } else if (cat === "Successful") {
      return {
        background: "green",
      };
    } else if (cat === "Unsuccessful") {
      return {
        background: "red",
      };
    } else if (cat === "Pending") {
      return {
        background: "orange",
      };
    }
  };
  return (
    <div className="buttons">
      {button.map((cat, i) => {
        return (
          <button
            style={makeStyles(cat) }
            className="btn"
            type="button"
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
