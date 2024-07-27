import React from "react";
import { data1 } from "../data";
import starimg from "../assets/icons8-star-48.png";

export default function Card(props) {
  return (
    <div style={{}}>
      <div
        style={{
          backgroundImage: `url(${props.img}) `,
          width: "300px",
          height: "300px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "12px",
        }}
      ></div>
      <div className="retitle" style={{ marginBottom: "0" }}>
        <h1>{props.title}</h1>
        <h3 style={{ fontWeight: "normal" }}>
          {" "}
          <img
            src={starimg}
            style={{ width: "20px", height: "20px", color: "gray" }}
            alt="starimg"
          />{" "}
          {props.review}{" "}
        </h3>
      </div>
      <h3 style={{ fontWeight: "normal", color: "gray", marginTop: "0" }}>
        {props.desc}
      </h3>
      <h3>
        {props.price}$ <span style={{ fontWeight: "normal" }}>night</span>
      </h3>
    </div>
  );
}
