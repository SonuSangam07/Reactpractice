import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  return (
    <div>
      <header className="App-header">

       <h2>Lets get started</h2>
       <ExpenseItem></ExpenseItem>
       
      </header>
    </div>
  );
}

export default App;
