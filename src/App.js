import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='App'>
      <div className="container">
      <h2>ToDoList</h2>
      </div>
      <div className="container">
    <h3> A good planning saves you 2 hours per day</h3>
      </div>
      <ToDoList />
    </div>
  
  );
}

export default App;
