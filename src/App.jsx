import Appheading from "./Appheading";
import Itemlist from "./Itemlist";
import "bootstrap/dist/css/bootstrap.min.css";
import Addtodo from "./Addtodo";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  const InitialTodoItem = [
    { name: "Gym", date: "25/01/2024" },
    { name: "Technical Study", date: "21/01/2024" },
    { name: "Lunch", date: "22/01/2024" },
    { name: "Japanese Study", date: "23/01/2024" },
    { name: "5km Walk", date: "24/01/2024" },
  ];
  let [todoitem, setDataItem] = useState(InitialTodoItem);

  const addNewItem = (itemName, itemDueDate) => {
    console.log(`Item Name  : ${itemName} | Due Date : ${itemDueDate}`);
    let newTodoItem = [...todoitem, { name: itemName, date: itemDueDate }];
    setDataItem(newTodoItem);
  };

  const deleteItem = (itemName) => {
    let newTodoItem = todoitem.filter((item) => item.name !== itemName);
    setDataItem(newTodoItem);
    console.log(`Delete Item Name  : ${itemName}`);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoitem: todoitem,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <Appheading></Appheading>
        <Addtodo></Addtodo>
        <WelcomeMessage></WelcomeMessage>
        <Itemlist></Itemlist>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
