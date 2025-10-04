import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./familyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext([]);

const FamilyTree = () => {
  const asset = "diamond";

  const [money,setMoney]=useState(0)
  
  return (
    <div className="family-tree">
      <h2>family tree</h2>
      <h6>Total Money : {money}</h6>
      <MoneyContext value={[money,setMoney]}>
        <AssetContext.Provider value={asset}>
          <Grandpa></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
