import React from "react";
import Card from "./Card";
import contects from "../contects";

function createCard(contect) {
  return (
    <Card
      key={contect.id}
      name={contect.name}
      img={contect.imgURL}
      tel={contect.phone}
      email={contect.email}
      age={contect.age}
    />
  );
}

function CreateCard() {
  return <div>{contects.map(createCard)}</div>;
}

export default CreateCard;
