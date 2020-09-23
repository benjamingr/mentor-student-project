import React from "react";
// import contects from "../data/contects.js";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div>
      <div className="card ">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
          <div className="bottom">
            <p className="ifpo">{props.tel}</p>
            <p className="ifpo">{props.email}</p>
            <p className="ifpo">{props.age}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
