import React from "react";

const Card = (WrappedComponent) => ({ title, header, abstract }) => {
  const formattedTitle = title.toUpperCase();
  const formattedHeader = header.toUpperCase();

  return (
    <div>
      <h1>{formattedTitle}</h1>
      <h3>{formattedHeader}</h3>
      <WrappedComponent abstract={abstract} />
    </div>
  );
};

export default Card;
