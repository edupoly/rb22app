import React, { useEffect, useRef } from 'react'

function LoginCom() {
    var rf1 = useRef();
    var rf2 = useRef();
    var rf3 = useRef();
    useEffect(()=>{})
    useEffect(()=>{rf1.current.focus()},[])
    function checkEnter(e){
        if(e.key==='Enter'){
            rf2.current.focus()
        }
    }
    function checkEnter2(e){
        if(e.key==='Enter'){
            rf3.current.focus();
        }
    }
    return (
        <div className='border border-2 border-danger m-2 p-2'>
            <h1>LoginCom</h1>
            User Name:<input type="text" ref={rf1} onKeyUp={checkEnter}/>
            <br/>
            Password:<input type="password" ref={rf2} onKeyUp={checkEnter2}/>
            <br />
            <button ref={rf3}>Login</button>
        </div>
    )
}

export default LoginCom