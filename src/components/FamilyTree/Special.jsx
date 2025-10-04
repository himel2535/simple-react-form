import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = () => {
  const newAsset = useContext(AssetContext);
//   console.log(newAsset);
  return (
    <div>
      <h5>Special</h5>
      <p>asset : {newAsset}</p>
    </div>
  );
};

export default Special;
