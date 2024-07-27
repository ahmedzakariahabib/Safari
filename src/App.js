import "./App.css";
import { data1 } from "./data";
import Card from "./Components/Card";
import moonimage from "./assets/icons8-moon-30.png";
import { useState } from "react";
function App() {
  const dataShow = data1.map((item, index) => (
    <Card
      key={index}
      img={item.img}
      title={item.title}
      desc={item.desc}
      review={item.review}
      price={item.price}
    />
  ));

  return (
    <>
      <div className="header1">
        <h2>Safari</h2>
        <button style={{ backgroundColor: "rgb(195, 189, 189)", border: "0" }}>
          <img src={moonimage} alt="moonimage" />
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {dataShow}
      </div>
    </>
  );
}

export default App;
