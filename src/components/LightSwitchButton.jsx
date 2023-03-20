import React, {useState} from 'react';

// we want to alternate between two states: on and off.
function LightSwitchButton (props) {
  const [light, setLight] = useState();
  return (
    <button className="LightSwitchButton">
{light === "on" ? <span><i>💡</i> I'm on!</span> : <span className="off"><i>💡</i> I'm off!</span>}
</button>
  );
}

export default LightSwitchButton;