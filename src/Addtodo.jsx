import { useContext, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TodoItemsContext } from "./store/todo-item-store";

function Addtodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  let handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  let handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  let handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row tp-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter TODO Here"
            name=""
            id=""
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            placeholder=""
            name=""
            id=""
            onChange={handleDueDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success tp-button"
            onClick={handleAddButtonClicked}
          >
            <MdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
