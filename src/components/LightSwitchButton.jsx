import React, {useState} from 'react';

// we want to alternate between two states: on and off.
function LightSwitchButton (props) {
  //is there a different way to write the below
  const {light, switchLight} = props;
  //why do we put switchLight() inside of a function instead of just = switchLight
  const handleClick = () => switchLight()
  return (
    <button onClick={handleClick} className="LightSwitchButton">
{light === "on" ? <span><i>💡</i> I'm on!</span> : <span className="off"><i>💡</i> I'm off!</span>}
</button>
  );
}

export default LightSwitchButton;