import React from "react";
import Card from "../Card";

const addAbstract = ({ abstract }) => (
  <>
    <p>{abstract}</p>
  </>
);

const AbstractCard = Card(addAbstract);

export default AbstractCard;
