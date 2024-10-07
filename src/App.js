import './App.css';
import Header from './components/Header';
import MainProductList from './components/MainProductList';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className="App">
      <Header />
      <MainProductList />
      <Receipt />
    </div>
  );
}

export default App;
