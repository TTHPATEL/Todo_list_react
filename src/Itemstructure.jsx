import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "./store/todo-item-store";

function Itemstructure({ itemname, itemdate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row tp-row">
        <div className="col-6">{itemname}</div>
        <div className="col-4">{itemdate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger tp-button"
            onClick={() => deleteItem(itemname)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Itemstructure;
