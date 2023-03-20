import React, {useState} from 'react';

// we want the value of anger to go from 0 to 1 by increments of 0.1, and once we go over 1, reset it to zero
function AngryButton (props) {
  const [anger = 0, setAnger] = useState();
  const handleClick = () => anger < 1 ? setAnger(anger + 0.1) : setAnger(0);
return (
<button onClick={handleClick} style={{backgroundColor: `rgba(255,0,0,${anger})`}} className="AngryButton">
{anger < 1 && <span>Don't click me too much! </span>}
{anger > 1 && <span>Rawr!</span>}
</button>
);
}


export default AngryButton;