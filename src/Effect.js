import React, {useState, useEffect} from "react";
const EffectComponent = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setTimeout(setTime(new Date()), 1000);
        return () => clearTimeout(timer);
    },[]);
    return(
            <h1>I'm useEffect example: {time.toLocaleTimeString()}</h1>
    )
}
export default EffectComponent;