import React, { useState, useEffect } from "react";


function Counter() {
  const [Count, setCount] = useState(0);

 useEffect(() => {
   document.title = `anda klik sebanyak ${Count}`
 })
 
  return (
    <div>
      <button onClick={() => setCount(Count + 1)}>klik disini </button>
      <br />
      <span>anda mengklik sebanyak {Count} kali</span>
    </div>
  );
}

export default Counter;
