import React from "react";
import { Button } from "antd";

function PetSetter({ name, type }) {
  const [congrats, setCongrats] = React.useState(null);

  React.useEffect(() => {
    name &&
      type &&
      setCongrats("You have a new " + type + ". Its name shall be " + name);
  }, [name, type]); // we want this to re-run if bar or baz change

  // React.useEffect(() => {
  //   name?.value &&
  //     type?.value &&
  //     setCongrats("You have a new " + type + ". Its name shall be " + name);
  // }, [name, type]); // we want this to re-run if bar or baz change

  return <>{congrats && <h1>{congrats}</h1>}</>;
}

function RefEqual() {
  const [pet, setPet] = React.useState({ name: null, type: null });
  const handleClick = (pet) => setPet(pet);

  return (
    <div>
      <PetSetter name={pet.name} type={pet.type} />

      <Button onClick={() => handleClick({ name: "Bodie", type: "dog" })}>
        I want a dog
      </Button>
      <Button onClick={() => handleClick({ name: "Casey", type: "cat" })}>
        I want a cat
      </Button>
    </div>
  );
}

export default RefEqual;
