import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./Counter";
import Todolist from "./Todolist";

function App() {
  return (
    <Provider store={store}>
      <div className="border border-2 border-danger m-2 p-2">
        <h1>App</h1>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
