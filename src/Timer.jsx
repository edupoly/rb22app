import React,{useEffect, useState} from 'react'

function Timer() {
    var [count, setCount] = useState(0);
    var t1 = setInterval(()=>{
                setCount(count+1)
            },10000)
    useEffect(()=>{
        console.log("Timer useEffect on every update");
        return ()=>{
            console.log("before next render")
            clearInterval(t1)
        }
    });
    useEffect(()=>{
        console.log("Timer useEffect on mounting");
        return ()=>{
            console.log("before unmounting")
            clearInterval(t1)
        }
    },[])
    return (
        <div className="border border-2 border-danger m-2 p-2 position-right">
            <h1>Timer:{count}</h1>
        </div>
    )
}

export default Timer