import React, {useState} from 'react';

// we want to alternate between two states: on and off.
function LightSwitchButton (props) {
  //is there a different way to write the below line?
  const {light, setLight} = props;
  const handleClick = () => setLight(light === "on" ? "off" : "on");
  return (
    <button onClick={handleClick} className="LightSwitchButton">
{light === "on" ? <span><i>💡</i> I'm on!</span> : <span className="off"><i>💡</i> I'm off!</span>}
</button>
  );
}

export default LightSwitchButton;