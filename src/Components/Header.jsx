import React, { useState } from "react";

function Header() {
  // Declare a new state variable, which we'll call "count"
  const [Input, setInput] = useState();
  const clickHandler = () => {
    console.log(Input);
  };
  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={() => clickHandler()}>click</button>
    </>
  );
}
export default Header;
