import React from 'react'

function Todo(props) {
    // console.log(props)
    // React.useEffect(()=>{console.log("useEffect with empty array"+props.todo.title)},[])
    // React.useEffect(()=>{console.log("useEffect with no array"+props.todo.title)})
  return (
            <li className='m-2 p-2'>
                <div className={props.todo.status===true?"bg-success":"bg-danger"}>
                    {props.todo.title}
                    <button onClick={()=>{props.deleteTodo(props.i)}}>Delete</button>
                    <button onClick={()=>{props.doneStatus(props.i)}}>{props.todo.status===true?'DONE':"UNDO"}</button>
                </div>
            </li>
  )
}

export default Todo
