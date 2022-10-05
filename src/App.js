import "./App.css";
import TodoApp from "./components/TodoApp";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoApp />
      <TodoList /> 
    </div>
  );
}

export default App;
