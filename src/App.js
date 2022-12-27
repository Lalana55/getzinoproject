import React, { useState } from "react";

import AddDynamicInput from "./AddDrop";
import "./App.css";

function App() {
  const [val1, setVal1] = useState(["ball", "bat", "tennis"]);
  const [val2, setVal2] = useState(["cricket", "sports", "football", "NBA"]);
  const [val3, setVal3] = useState(["worldcup", "IPL"]);
  const [val4, setVal4] = useState(["FIFA", "India", "Hockey"]);
  return (
    <div className="App">
      <AddDynamicInput
        val={val1}
        setVal={setVal1}
        color={"#FFCCCB"}
        colorText={"Red"}
      />
      <AddDynamicInput
        val={val2}
        setVal={setVal2}
        color={"	#ADD8E6"}
        colorText={"Blue"}
      />
      <AddDynamicInput
        val={val3}
        setVal={setVal3}
        color={" #90EE90"}
        colorText={"Green"}
      />
      <AddDynamicInput
        val={val4}
        setVal={setVal4}
        color={"rgba(0,0,0,0.2)"}
        colorText={"Black"}
      />
    </div>
  );
}

export default App;
