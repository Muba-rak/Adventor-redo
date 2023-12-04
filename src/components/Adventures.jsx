import React, { useState } from "react";
import "../styles/adventures.css";
import Adventure from "./Adventure";
import Refresh from "./Refresh";
import data from "../mockData/data";

const Adventures = () => {
  const [adventures, setAdventures] = useState(data);

  //remove adv function

  const removeAdventure = (id) => {
    const remainingAdventures = adventures.filter(
      (adventure) => adventure.id !== id
    );
    setAdventures(remainingAdventures);
  };
  //refresh function

  const refresh = () => {
    setAdventures(data);
  };
  if (adventures.length === 0) {
    return <Refresh refresh={refresh} />;
  }

  return (
    <div className="adventure-card">
      {adventures.map((adventure) => {
        return (
          <Adventure
            key={adventure.id}
            {...adventure}
            removeAdventure={removeAdventure}
          />
        );
      })}
    </div>
  );
};

export default Adventures;
