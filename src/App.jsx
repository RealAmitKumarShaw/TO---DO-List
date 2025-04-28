import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Home Work",
      dueDate: "4/10/2023",
    },
    {
      name: 'Assignment',
      dueDate: "4/10/2023",
    },
    {
      name: "Project",
      dueDate: "11/10/2023",
    }
  ];

  return (
    <center className="to-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
      
    </center>
  );
}

export default App;
