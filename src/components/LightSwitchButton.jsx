import React, {useState} from 'react';

// we want to alternate between two states: on and off.
function LightSwitchButton (props) {
  const {light, switchLight} = props;
  //or  you could write props.switchLight below
  //why do we put switchLight() inside of a function instead of just = switchLight. we would do it the below way if there were parameters
  const handleClick = () => switchLight()
  return (
    <button onClick={handleClick} className="LightSwitchButton">
{light === "on" ? <span><i>💡</i> I'm on!</span> : <span className="off"><i>💡</i> I'm off!</span>}
</button>
  );
}

export default LightSwitchButton;