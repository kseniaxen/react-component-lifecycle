import React, { useState, useEffect } from 'react'
function Home() {
    const [count, setCount] = useState(0)
    useEffect(()=>{console.log('useEffect')}, [count])
  return (
    <div>
      <h1>Home</h1>
        <button onClick={()=>setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default Home;
