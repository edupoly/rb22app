import React,{useState} from "react";
import Child from "./Child";
function App() {
  const [count, setCount] = useState(0)
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }

  const [a, setA] = useState(100);
  const [b, setB] = useState('uma');
  const [ar, setAr] = useState([10,20,[30,40]]);

  var abc = React.useCallback(function(){
    console.log('hi')
  },[])

  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h1>Count:{count}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <Child a={a} b={b} ar={ar} abc={abc}></Child>
    </div>
  );
}

export default App;
