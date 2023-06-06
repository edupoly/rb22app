import React,{useRef, useState} from 'react'
import Todo from './Todo';

function Todolist() {
    var rf1 = useRef();
    
    const [todos, setTodos] = useState([
        {
            title:'clear bills',
            status:true
        }
        ,{
            title:'moksha fee',
            status:false
        },
        {
            title:'creditcard',
            status:false
        },
        {
            title:'fee collection',
            status:false
        }
        ,{
            title:'salaries',
            status:true
        },
        {
            title:'rent',
            status:false
        },
    ])
    function deleteTodo(i){
        var temp = [...todos];
        temp.splice(i,1);
        setTodos([...temp])
    }
    function doneStatus(i){
        var temp = [...todos];

        temp[i].status=!temp[i].status;

        setTodos([...temp])
    }
    function addTask(){
        var x = rf1.current.value;
        var newtask = {
            title:x,
            status:false
        }
        setTodos([...todos,newtask])
    }
    React.useEffect(()=>{
        rf1.current.focus();
         console.log("Todolist useEffect with empty array")
    },[])
    React.useEffect(()=>{console.log("Todolist useEffect with no array")})
  return (
    <div className="border border-2 border-success m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" ref={rf1}/>
        <button onClick={addTask}>Add Task</button>
        <ul>
            {
                todos.map((todo,i)=>{
                    return  <Todo todo={todo} i={i} deleteTodo={deleteTodo} doneStatus={doneStatus}>
                    </Todo>
                })
            }
        </ul>
        
    </div>
  )
}

export default Todolist
// dumb components//smart components