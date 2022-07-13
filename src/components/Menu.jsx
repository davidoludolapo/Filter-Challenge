import React from "react";


function Menu({ data }) {

  const makeStyles = (data) => {
    if (data.category === "Successful") {
      return {
        color: "green",
      };
    
    } else if (data.category === "Unsuccessful"){
      return {
        color: "red",
      };
    } else if (data.category === "Pending") {
      return {
        color: "orange",
      };
    }
  };


  return (
    <>
      <div className="item">
        {data.map((item, index) => {
          return (
            <>
              <span>{item.date}</span> <br />
              {item.data?.map((data) => (
                <div className="item-con" key={data.id}>
                  <div className="item-container">
                    <img src={data.image} alt="" />
                    <div className="details">
                      <h2>{data.name}</h2>
                      <p>Transaction ID: {data.id}</p>

                      <p>Status: <span style={makeStyles(data) }>{data.category}</span> </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
