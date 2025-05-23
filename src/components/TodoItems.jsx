import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={style.itemsContener}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
