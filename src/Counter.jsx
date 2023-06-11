import React from 'react'
import {connect} from 'react-redux'
function Counter(props) {
    console.log(props)
  return (
    <div className="border border-2 border-primary m-2 p-2">
        <h1>Counter:{props.counter.count}</h1>
        <button onClick={()=>{props.dispatch({type:'INCREMENT'})}}>Inc</button>
        <button onClick={()=>{props.dispatch({type:"DECREMENT"})}}>Dec</button>
    </div>
  )
}

export default connect(function(store){return store})(Counter)
