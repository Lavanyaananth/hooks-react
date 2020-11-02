import React, { useState } from "react";
const StateComponent = () => {
    const [isGreen,setIsGreen] = useState(true);
    return(
        <h1 onClick={() => setIsGreen(!isGreen)}
            style= {{color: isGreen ? "limegreen" : "crimson"}}
        >Hey I'm Use state example</h1>
    );
}
export default StateComponent;