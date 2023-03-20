import React, {useState} from 'react';

// show as many <span>I like this text</span> elements as the value of the repetitions state.
function TextRepeaterButton (props) {
  const [repetitions = 1, setRepetitions] = useState();
  const textArray = [];
  for (let i = 0; i < repetitions; ++i) {
    textArray.push(<span key={i}>I like this text</span>);
  }
  return (
<button className="TextRepeaterButton">
{textArray}
</button>
  );
}

export default TextRepeaterButton;