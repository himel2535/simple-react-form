import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h5>uncle</h5>
      <section className="flex">
        <Cousin name="Rafsan"></Cousin>
        <Cousin name="lemon"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
