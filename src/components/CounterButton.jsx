import React, {useState} from 'react';

// we want the value of clickAmount to start at 0 and increment by 1 with each click
function CounterButton (props) {
  const [clickAmount = 0, setClickAmount] = useState();
  const handleClick = () => {setClickAmount(clickAmount + 1)}
return (
<button onClick={handleClick} className="CounterButton">
You clicked me {clickAmount} amount of times
</button>

);
}

export default CounterButton;