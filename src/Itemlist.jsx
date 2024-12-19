import Itemstructure from "./Itemstructure";
import styles from "./Itemlist.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-item-store";
let Itemlist = () => {
  const { todoitem } = useContext(TodoItemsContext);
  console.log(`Item from Context : ${todoitem}`);
  return (
    <div className={styles.itemcontainer}>
      {todoitem.map((item, index) => (
        <Itemstructure
          key={index}
          itemname={item.name}
          itemdate={item.date}
        ></Itemstructure>
      ))}
    </div>
  );
};

export default Itemlist;
