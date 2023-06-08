import React, { useEffect } from 'react'

function Child() {
    useEffect(()=>{
        console.log("Child re rendered")
    },[])
    console.log('Child Rendered')

  return (
    <div className="border border-2 border-success m-2 p-2">
        <h1>Child</h1>
    </div>
  )
}

export default React.memo(Child)