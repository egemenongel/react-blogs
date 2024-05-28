import { useState } from "react";

const Counter = () => {

  const [count,increment] = useState(0)

  const onTap = () =>{
    increment(count+1)
  }
  return ( 
    <div className="counter">
      <h2>Home Page</h2>
      <body>
        <p>{count}</p>
      </body>
      <button onClick={onTap}></button>
    </div>
   );
}
 
export default Counter;