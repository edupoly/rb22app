const initialState = {
    todos:['clear bills','cleaning car','moksha toy'],
    newtodo:''
}
var todoReducer = function(state=initialState,action){
    if(action.type==='UPDATENEWTODO'){
        return {...state,newtodo:action.payload}
    }
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,state.newtodo]}
    }
    if(action.type==='DELETETODO'){
        var temp = [...state.todos];
        temp.splice(action.index,1)
        return {...state,todos:[...temp]}
    }
    return state
}
export default todoReducer;