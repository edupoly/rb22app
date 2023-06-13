import React from 'react'
import {connect} from 'react-redux'
import { addTodo, deleteTodo, updateNewTodo } from './store/actions'
function Todolist(props) {

  return (
    <div className="border border-2 border-secondary m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" onKeyUp={props.handleNewTodo}/>
        <button onClick={props.addTodo}>Add Todo</button>
        <ul>
            {
                props.todos && props.todos.map((t,i)=>{
                    return (
                            <li>
                                {t}
                                <button onClick={()=>{props.deleteTodo(i)}}>Del</button>
                            </li>
                        )
                })
            }
        </ul>
    </div>
  )
}
function mapStateToProps(state){return state.todolist}
function mapDispatchToProps(dispatch){return {
    handleNewTodo:(e)=>{dispatch(updateNewTodo(e.target.value))},
    addTodo:()=>{dispatch(addTodo())},
    deleteTodo:(ind)=>{dispatch(deleteTodo(ind))}
}}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)