import './style/App.css';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Theme from './components/Theme';
import Summary from './components/Summary';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <head>
        <Theme />
      </head>
      <body>
        <Container maxWidth="lg">
          <Summary />
          <Experience />
        </Container>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
