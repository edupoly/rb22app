const initialState={
    count:100
}

var counterReducder = function(state=initialState,action){
    console.log(state,action)
    if(action.type==='INCREMENT'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DECREMENT'){
        return {...state,count:state.count-1}
    }
    if(action.type==='RESET'){
        return {...state,count:initialState.count}
    }
    return state;
}
export default counterReducder