import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";

function App() {
  const [light, setLight] = useState();
  const dark = light === "on" ? "" : "dark";
  const switchLight = () => setLight(light === "on" ? "off" : "on");
  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton
          light={light}
          setLight={setLight}
          switchLight={switchLight}
        />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
