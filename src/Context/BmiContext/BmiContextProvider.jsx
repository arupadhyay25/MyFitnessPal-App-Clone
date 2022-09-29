import React, { useState } from "react";
export let BmiContext = React.createContext();

const BmiContextProvider = ({ children }) => {
  let [Bmi, setBmi] = useState(0);

  let calculateBmi = (height, weight) => {
    let nemo = Number(weight);
    let deno = Number(height) * Number(height);
    setBmi(Number(parseFloat((nemo / deno) * 10000).toFixed(2)));
  };

  return (
    <BmiContext.Provider value={{ Bmi, calculateBmi }}>
      {children}
    </BmiContext.Provider>
  );
};

export default BmiContextProvider;
