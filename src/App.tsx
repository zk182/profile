import logo from './logo.svg';
import './style/App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site under construction!
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
