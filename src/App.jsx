import React,{useState} from "react";
function App() {
  const [count, setCount] = React.useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0)
  var abc=React.useMemo(()=>{
    alert("HI")
    return +(a)+(+b);
  },[a,b])
  
  
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h1>Count:{count}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <br></br>
      <input type="text" onChange={(e)=>{setA(e.target.value)}}/><br/>
      <input type="text" onChange={(e)=>{setB(e.target.value)}}/><br/>
      <h2>ABC:{abc}</h2>
    </div>
  );
}

export default App;
