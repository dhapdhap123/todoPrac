import './App.css';
import TodoInsert from './componenets/TodoInsert';
import TodoList from './componenets/TodoList';
import TodoTemplate from './componenets/TodoTemplate';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
