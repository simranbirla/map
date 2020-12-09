import React, { useState, useEffect } from "react";
import kruskal_algo from "./kruskal_algo";
import { data } from "./data";
import kruskal_arr from "./distanceMatrix";

const Path = () => {
  const [out, setOut] = useState();
  const [weight, setWeight] = useState();
  useEffect(() => {
    const output = kruskal_algo(kruskal_arr, data.length);
    const distance = output.reduce((acc, val) => {
      return { weight: acc.weight + val.weight };
    });
    setWeight(distance.weight.toFixed(2));

    setOut(output);
    return () => {
      setOut();
    };
  }, [data]);

  return (
    <div>
      {out
        ? out.map((place, index) => {
            return (
              <div key={index}>
                {data[place.source].Name} === {data[place.destination].Name}
              </div>
            );
          })
        : null}
      <h3>{weight ? weight + " km " : null}</h3>
    </div>
  );
};

export default Path;
