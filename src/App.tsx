import './style/App.css';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Theme from './components/Theme';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App">
      <head />
      <body>
        <Theme />
        <Summary />
        <Experience />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
