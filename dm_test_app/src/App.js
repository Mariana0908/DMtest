import logo from './logo.svg';
import './App.css';
import SumOfEvenNumbers from './Components/SumOfEvenNumbers';

function App() {
  const initialNumbers = [1, 2, 3, 4, 5, 6];
  return (
    <div className="App">
      <SumOfEvenNumbers numbers={initialNumbers} />
    </div>
  );
}

export default App;
