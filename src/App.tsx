import './style/App.css';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Theme from './components/Theme';

function App() {
  return (
    <div className="App">
      <head />
      <body>
        <Theme />
        <Experience />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
