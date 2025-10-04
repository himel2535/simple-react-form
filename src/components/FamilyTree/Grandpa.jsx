import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunty from "./Aunty";

const Grandpa = () => {
    // const asset='diamond'
  return (
    <div>
      <h1>grandpa</h1>
      <section className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
