import React, { useState } from "react";

const App = () => {
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);
    const UpdateTime = () =>{
       let newCTime = new Date().toLocaleTimeString();
        setCtime(newCTime);
    }

    return(
        <>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime}>Check Time</button>
        </>
    );
}

export default App;
